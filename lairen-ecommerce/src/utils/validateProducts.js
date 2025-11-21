export const validateProducts = (product, fileRequired=true) => {
    const errors = {};
    console.log("El product ", product);

    if (!product.name || product.name.trim() === '') {
        errors.name = 'El nombre del producto es obligatorio';
    }

    if (!product.price || isNaN(product.price) || Number(product.price) <= 0) {
        errors.price = 'El precio del producto debe ser un número positivo';
    }

    if (!product.expansion || product.expansion.trim() === '') {
        errors.expansion = 'La expansión del producto es obligatoria';
    }

    if (fileRequired && (!product.file)) {
        errors.image = 'La imagen del producto es obligatoria';
    }

    return errors;
}