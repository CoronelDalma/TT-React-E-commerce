import './Item.css'

export const Item = ({ name, price, imgUrl, expansión, description, children }) => {
    return (
        // aca podria estar Link para ir a detalle
        <article className="item-card">
            <img src={imgUrl} alt={"no encontrado"} />
            <h3 className="item-title">{name}</h3>
            <p>Precio: ${price}</p>
            <p className='item-description-short'>Descripción: {description}</p>
            {children}
            <p>Expansión: {expansión}</p>
        </article>
    )
}