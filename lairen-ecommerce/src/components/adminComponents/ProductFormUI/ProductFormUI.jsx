export const ProductFormUI = ({ product, errors, loading, onChange, onFileChange, onSubmit }) => {
    return (
        <section>
            <form className="product-form" onSubmit={onSubmit}>
                <h2>Agregar producto</h2>
                <div>
                    <label htmlFor="">Nombre:</label>
                    <input type="text" name="name" value={product.name} onChange={onChange} required/>
                    {errors.name && <span className="error">{errors.name}</span>}
                </div>
                <div>
                    <label htmlFor="">Precio:</label>
                    <input type="number" name="price" value={product.price} onChange={onChange} required/>
                    {errors.price && <span className="error">{errors.price}</span>}
                </div>
                <div>
                    <label htmlFor="">Expansion</label>
                    <input type="text" name="expansion" value={product.expansion} onChange={onChange} required />
                    {errors.expansion && <span className="error">{errors.expansion}</span>}
                </div>
                <div>
                    <label htmlFor="">Descripcion:</label>
                    <textarea name="description" value={product.description} onChange={onChange} required></textarea>
                    {errors.description && <span className="error">{errors.description}</span>}
                </div>

                <div>
                    <label htmlFor="">Imagen:</label>
                    <input type="file" name="image" onChange={(e) => onFileChange(e.target.files?.[0] ?? null)} accept="image/*" />
                    {errors.image && <span className="error">{errors.image}</span>}
                </div>
                <button className="btn" type="submit" disabled={loading}>
                    {loading ? 'Guardando...' : 'Guardar Producto'}
                </button>
            </form>
        </section>
    );
}