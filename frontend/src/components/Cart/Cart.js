import React, { useState, useEffect } from 'react';
import { getShops, getProducts } from '../../services/shopService';
import { placeOrder } from '../../services/orderService';

const Cart = () => {
    const [shops, setShops] = useState([]);
    const [products, setProducts] = useState([]);
    const [selectedShop, setSelectedShop] = useState('');
    const [selectedProducts, setSelectedProducts] = useState([]);
    const [discount, setDiscount] = useState('');

    useEffect(() => {
        const fetchShops = async () => {
            const data = await getShops();
            setShops(data);
        };

        const fetchProducts = async () => {
            const data = await getProducts();
            setProducts(data);
        };

        fetchShops();
        fetchProducts();
    }, []);

    const handleOrder = async () => {
        try {
            await placeOrder({
                shopId: selectedShop,
                products: selectedProducts,
                discount,
            });
            alert('Order placed successfully');
        } catch (err) {
            console.error('Order failed', err);
        }
    };

    return (
        <div>
            <h2>Cart</h2>
            <select onChange={(e) => setSelectedShop(e.target.value)}>
                <option value="">Select Shop</option>
                {shops.map((shop) => (
                    <option key={shop._id} value={shop._id}>
                        {shop.name}
                    </option>
                ))}
            </select>
            {/* Add product selection logic here */}
            <input
                type="text"
                placeholder="Discount"
                value={discount}
                onChange={(e) => setDiscount(e.target.value)}
            />
            <button onClick={handleOrder}>Place Order</button>
        </div>
    );
};

export default Cart;

