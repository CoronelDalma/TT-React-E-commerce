const ITEMS_URL='/data/products.json';

export const getItems=async() => {
    try {
        const response=await fetch(ITEMS_URL);
        if(!response.ok) throw new Error('Network response was not ok');
        const data=await response.json();
        return data;    
    } catch (error) {
        console.error('Fetch error:',error);
        throw error;
    }
}

export const getItemById = async(id) => {
    try {
        const response = await fetch(ITEMS_URL);
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();
        const item = data.find(product => product.id === parseInt(id));
        if (!item) throw new Error('Item not found');
        return item;
    } catch (error) {
        console.error('Fetch error:', error);
        throw error;
    }
}