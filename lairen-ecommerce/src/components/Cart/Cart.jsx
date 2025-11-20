import { useCartContext } from '../../context/CartContext/useCartContext'

export const Cart = () => {
    const { cart, addToCart, clearCart, removeItem, getTotalItems, getTotalPrice } = useCartContext();

    return (
        <section>
            {cart.getTotalItems > 0 ?
                <p>${getTotalItems}</p>
            : <p>No hay productos agregados</p>
            }
        </section>
    )
}