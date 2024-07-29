import React, { useState, useEffect } from 'react';
import { getProducts } from '../../services/productService';
import Product from './Product';

const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const data = await getProducts();
            setProducts(data);
        };

        fetchProducts();
    }, []);

    return (
        <div>
            <h2>Products</h2>
            {products.map((product) => (
                <Product key={product._id} product={product} />
            ))}
        </div>
    );
};

export default ProductList;

