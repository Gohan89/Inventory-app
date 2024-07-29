import React, { useState, useEffect } from 'react';
import { getShops } from '../../services/shopService';
import Shop from './Shop';

const ShopList = () => {
    const [shops, setShops] = useState([]);

    useEffect(() => {
        const fetchShops = async () => {
            const data = await getShops();
            setShops(data);
        };

        fetchShops();
    }, []);

    return (
        <div>
            <h2>Shops</h2>
            {shops.map((shop) => (
                <Shop key={shop._id} shop={shop} />
            ))}
        </div>
    );
};

export default ShopList;

