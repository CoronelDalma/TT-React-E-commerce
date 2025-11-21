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
        console.log("carrito:", cart);
    }

    const discountFromCart = (item) => {
        if (exists(item.id)) {
            const updatedCart = cart.map((prod) => {
                if (prod.id == item.id) {
                    const updatedQty = prod.quantity - 1;
                    if (updatedQty>0) {
                        alert(`Decrementado`);
                        return {...prod, quantity: updatedQty}
                    } else {
                        alert(`${item.name} eliminado del carrito`);
                        return null;
                    }
                        
                } else {
                    return prod;
                }  
            })
        
            const finalUpdatedCart = updatedCart.filter( prod => prod !== null );
            setCart(finalUpdatedCart);
            
        } else {
            alert(`${item.name} No pertenece al carrito`);
        } 
        console.log("carrito:", cart);
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

    const values = { cart, addToCart, clearCart, removeItem, getTotalItems, getTotalPrice, discountFromCart };
    return (
        <CartContext.Provider value={values}>
            {children}
        </CartContext.Provider>
    )
}