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

}