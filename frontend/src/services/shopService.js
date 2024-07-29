import axios from 'axios';

const API_URL = 'http://localhost:5000/api/shops';

export const getShops = async () => {
    const response = await axios.get(API_URL);
    return response.data;
};

export const addShop = async (shop) => {
    const response = await axios.post(API_URL, shop);
    return response.data;
};

