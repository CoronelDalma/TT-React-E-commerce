import { useState } from 'react';
import { CartContext } from './CartContext';

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const exists = (id) => {
        return cart.some(prod => prod.id === id);
    }

    const addToCart = (item) => {
        if (exists(item.id)) {
            const updatedCart = cart.map((prod) => {
                if (prod.id == item.id) {
                    return {...prod, quantity: prod.quantity + item.quantity}
                } else {
                    return prod;
                }  
            })
            setCart(updatedCart);
            alert(`Agregado`);
        } else {
            setCart([...cart, item]);
            alert(`${item.name} agregado`);
        } 
    }

    const clearCart = () => setCart([]);

    const removeItem = (id) => {
        setCart(cart.filter(prod => prod.id !== id))
        alert("Producto eliminado del carrito");
    };

    const getTotalItems = () => {
        const totalItems = cart.reduce((acc, prod) => acc + prod.quantity, 0);
        return totalItems;
    }

    const getTotalPrice = () => {
        const total = cart.reduce((acc, prod) => acc + prod.quantity * prod.price, 0);
        return Math.round(total * 100) / 100;
    }

    const values = { cart, addToCart, clearCart, removeItem, getTotalItems, getTotalPrice };
    return (
        <CartContext.Provider value={values}>
            {children}
        </CartContext.Provider>
    )
}