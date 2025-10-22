import { Link } from "react-router-dom";
import { Item } from "../Item/Item";
import './ItemList.css'

export const ItemList = ({ items }) => {
    return (
        <div className="item-list">
            {items.length ? (
                items.map(item => (
                    //cambiar esta parte xq no reutilizo item en itemDetail
                    <Link key={item.id} to={`/item/${item.id}`}>
                        <Item {...item} />
                    </Link>
                ))
            ) : (
                <h2>Sin productos disponibles</h2>
                )
            }
        </div>
    );
}