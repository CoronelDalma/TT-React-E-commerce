import './CartItem.css';

export const CartItem = ({ item, removeItem, addToCart }) => {
    return (
        <div className="cart-item">
            <img src={item.imgUrl} alt={item.name} className="item-image" />
            <div className="item-details">
                <h3 className="item-name">{item.name}</h3>
                <p className="item-price">${item.price.toFixed(2)} c/u</p>
                <div className="item-actions">
                    <button onClick={() => removeItem(item,1)} className="btn quantity-btn ">-</button>
                    <span className="item-quantity">{item.quantity}</span>
                    <button onClick={() => addToCart(item, 1)} className=" btn quantity-btn">+</button>
                </div>
            </div>
            <p className="item-subtotal">${(item.price * item.quantity).toFixed(2)}</p>
            <button onClick={() => removeItem(item.id, item.quantity)} className=" btn remove-item-btn">
                &times; {/* Símbolo de "x" para eliminar */}
            </button>
        </div>
    );
};