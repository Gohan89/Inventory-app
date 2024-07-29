import React, { createContext, useState, useContext } from 'react';
import { getProducts, addProduct } from '../services/productService';

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
    const [products, setProducts] = useState([]);

    const fetchProducts = async () => {
        const productData = await getProducts();
        setProducts(productData);
    };

    const createProduct = async (product) => {
        await addProduct(product);
        fetchProducts();
    };

    return (
        <ProductContext.Provider value={{ products, fetchProducts, createProduct }}>
            {children}
        </ProductContext.Provider>
    );
};

export const useProducts = () => useContext(ProductContext);

