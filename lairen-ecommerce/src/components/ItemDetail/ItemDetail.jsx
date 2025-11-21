import { useCartContext } from '../../context/CartContext/useCartContext';
import Count from '../Count/Count';
import './ItemDetail.css';

export const ItemDetail = ({ detail }) => {
    const { addToCart } = useCartContext();

    const handleAdd = (quantity) => {
        addToCart({ ...detail, quantity });
    }
    return (
        <section className="item-detail">
            <div>
                <img src={detail.imgUrl} alt={detail.name} />
            </div> 
            <div>
                <h4>{detail.tipo}</h4>
                <h2>{detail.name}</h2>
                <h5>{detail.expansion}</h5>               
                <p>{detail.description}</p>
                <p>Price: ${detail.price}</p>
                <p>Rareza: {detail.rareza}</p>

                <Count onConfirm={handleAdd}/>
            </div>
        </section>
    )
}