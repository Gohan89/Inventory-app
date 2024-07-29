import React, { useState } from 'react';
import { addProduct } from '../../services/productService';

const AddProduct = () => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');

    const handleAddProduct = async () => {
        try {
            await addProduct({ name, price });
            setName('');
            setPrice('');
            alert('Product added successfully');
        } catch (err) {
            console.error('Add product failed', err);
        }
    };

    return (
        <div>
            <h2>Add Product</h2>
            <input
                type="text"
                placeholder="Product Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <input
                type="number"
                placeholder="Product Price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
            />
            <button on

