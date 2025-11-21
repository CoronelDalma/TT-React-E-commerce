import { useState } from 'react';
import { ProductFormUI } from '../ProductFormUi/ProductFormUi';
import { validateProducts } from '../../../utils/validateProducts';
import { uploadToImgbb } from '../../../services/uploadImage';
import { createProduct } from '../../../services/products';

import "../ProductFormContainer/ProductFormContainer.css";

export const ProductFormContainer = () => {
    const [ loading, setLoading ] = useState();
    const [ error, setError ] = useState("");
    const [ file, setFile ] = useState(null);
    const [ product, setProduct ] = useState({
        name: '',
        description: '',    
        price: '',
        expansion: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct({   
            ...product,
            [name]: value,
        });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError({});

        const newErrors = validateProducts({...product, file});
        if (Object.keys(newErrors).length > 0) {
            setError(newErrors);
            setLoading(false);
            return;
        }

        try {
            // imageURl asi se llama en la API
            const imgUrl = await uploadToImgbb(file); // Asume que uploadImage es una función que sube la imagen y devuelve la URL
            const productData = {
                ...product,
                price: Number(product.price),
                imgUrl
            }

            await createProduct(productData); // Asume que createProduct es una función que crea el producto en la base de datos
            alert('Producto creado con éxito');
            setProduct({
                name: '',
                description: '',    
                price: '',
                expansion: '',
            });
            setFile(null);
        } catch (err) {
            setError({ general: err.message });
        } finally {
            setLoading(false);
        }

    };

    return <ProductFormUI product={product} errors={error} loading={loading} onChange={handleChange} onFileChange={setFile} onSubmit={handleSubmit}/>;
}
