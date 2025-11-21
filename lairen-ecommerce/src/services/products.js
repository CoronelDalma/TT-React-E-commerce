// mock api service for products
const BASE_URL = 'https://691fa56331e684d7bfca57bb.mockapi.io/products'; 

export const createProduct = async (productData) => {
    const response = await fetch(BASE_URL, {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify(productData),
    });

    if (!response.ok) {
        throw new Error('Failed to create product');
    }

    const data = await response.json();
    return data;
}

export const getItems = async() => {
    const response = await fetch(BASE_URL);
    if (!response.ok) {
        throw new Error('Failed to get items');
    }
        const data = await response.json();
    return data;
}

export const getItemById = async (id) => {
    const response = await fetch(`${BASE_URL}/${id}`);
    if (!response.ok) {
        throw new Error('Failed to get item by id');
    }
    const data = await response.json();
    return data;
}

export const updateProduct = async (id, updatedData) => {
    const response = await fetch(`${BASE_URL}/${id}`, {
        method: 'PUT',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedData),
    });
    if (!response.ok) {
        throw new Error('Failed to update product');
    }
    const data = await response.json();
    return data;
}

export const deleteProduct = async (id) => {
    const response = await fetch(`${BASE_URL}/${id}`, {
        method: 'DELETE',
    });
    if (!response.ok) {
        throw new Error('Failed to delete product');
    }   
    return true;
}

