import { useState, useEffect } from "react";
import { getItems } from "../../services/api";
import { ItemList } from "../ItemList/ItemList";

export const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getItems()
            .then((data) => setItems(data))
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));
    }, []);

    return (
        <section>
            <h2>Nuestras cartas</h2>
            {!loading ? <ItemList items={items} /> : <p>Cargando...</p>}
        </section>
    )
}