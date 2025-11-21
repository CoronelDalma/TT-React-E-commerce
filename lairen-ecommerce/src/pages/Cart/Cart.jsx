import { useCartContext } from "../../context/CartContext/useCartContext";
import { CartItem } from "../../components/CartItem/CartItem";
import { Link } from 'react-router-dom'

import './Cart.css';

export const Cart = ({ title= "Carrito" }) => {
    const { cart, addToCart, clearCart, getTotalItems, getTotalPrice, discountFromCart } = useCartContext();
    const totalItems = getTotalItems();
    const totalPrice = getTotalPrice();

    return (
        <section className="container cart-container">
            <h1 className="cart-title">{title} ({totalItems} {totalItems === 1 ? 'carta' : 'cartas'})</h1>

            {totalItems === 0 ? (
                <div className="empty-cart">
                    <p>Parece que no hay cartas en tu carrito 😥</p>
                    <Link to={'/'}>Volver a la Tienda</Link>
                </div>
            ) : (
                <div className="cart-content">
                    <div className="cart-item-list">
                        {cart.map(item => (
                            <CartItem 
                                key={item.id} 
                                item={item} 
                                removeItem={discountFromCart} 
                                addToCart={addToCart} 
                            />
                        ))}
                    </div>

                    <div className="cart-summary">
                        <div className="summary-details">
                            <p>Subtotal ({totalItems} ítems):</p>
                            <p className="summary-value">${totalPrice.toFixed(2)}</p>
                        </div>
                        
                        <div className="summary-total">
                            <p className="total-label">Total:</p>
                            <p className="total-price">${totalPrice.toFixed(2)}</p>
                        </div>
                        
                        <button className="checkout-btn">Finalizar Compra</button>
                        <button 
                            onClick={clearCart} 
                            className="clear-cart-btn"
                        >
                            Vaciar Carrito
                        </button>
                    </div>
                </div>
            )}
        </section>
    )
}