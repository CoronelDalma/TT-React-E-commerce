import { useState, useEffect } from "react";
import { getItems } from "../../services/api";
// import { getItems } from "../../services/products";
import { ItemList } from "../ItemList/ItemList";
import { useParams } from 'react-router-dom';

export const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const { expansion } = useParams();

    useEffect(() => {
        // getItems()
        //     .then((data) => setItems(data))
        //     .catch((error) => console.error(error))
        //     .finally(() => setLoading(false));

        getItems(expansion)
            .then((data) => setItems(data))
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));
    }, [expansion]);

    return (
        <section>
            <h2>Nuestras cartas</h2>
            {!loading ? <ItemList items={items} /> : <p>Cargando...</p>}
        </section>
    )
}