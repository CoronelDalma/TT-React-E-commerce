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
        setError({});
        setLoading(true);

        const newErrors = validateProducts({...product, file});
        if (Object.keys(newErrors).length > 0) {
            setError(newErrors);
            setLoading(false);
            return;
        }

        try {
            // imgUrl asi se llama en la API
            const imgUrl = await uploadToImgbb(file);
            const productData = {
                ...product,
                price: Number(product.price),
                imgUrl
            }

            await createProduct(productData); 
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
