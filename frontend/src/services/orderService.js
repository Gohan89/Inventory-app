import axios from 'axios';

const API_URL = 'http://localhost:5000/api/orders';

export const placeOrder = async (order) => {
    const response = await axios.post(API_URL, order);
    return response.data;
};

