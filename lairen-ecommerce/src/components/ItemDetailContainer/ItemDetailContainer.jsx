import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getItemById } from "../../services/api";
import { ItemDetail } from "../ItemDetail/ItemDetail";

export const ItemDetailContainer = () => {
    const [detail, setDetail] = useState({});
    const { id } = useParams();

    useEffect(() => {
        if  (!id) return;
        getItemById(id)
            .then((data) => {setDetail(data);console.log(data);})
            .catch((error) => console.error(error));

    }, [id]);
    
    return (
        <main>
            <h2>Item Detail Container</h2>
            {
                (detail?.id) ? (
                    <ItemDetail detail={detail} />
                ) : (
                    <p>Cargando...</p>
                )
            }
        </main>
    )
}