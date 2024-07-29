import React, { createContext, useState, useContext } from 'react';
import { getShops, addShop } from '../services/shopService';

const ShopContext = createContext();

export const ShopProvider = ({ children }) => {
    const [shops, setShops] = useState([]);

    const fetchShops = async () => {
        const shopData = await getShops();
        setShops(shopData);
    };

    const createShop = async (shop) => {
        await addShop(shop);
        fetchShops();
    };

    return (
        <ShopContext.Provider value={{ shops, fetchShops, createShop }}>
            {children}
        </ShopContext.Provider>
    );
};

export const useShops = () => useContext(ShopContext);

