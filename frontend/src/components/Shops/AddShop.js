import React, { useState } from 'react';
import { addShop } from '../../services/shopService';

const AddShop = () => {
    const [name, setName] = useState('');
    const [location, setLocation] = useState('');

    const handleAddShop = async () => {
        try {
            await addShop({ name, location });
            setName('');
            setLocation('');
            alert('Shop added successfully');
        } catch (err) {
            console.error('Add shop failed', err);
        }
    };

    return (
        <div>
            <h2>Add Shop</h2>
            <input
                type="text"
                placeholder="Shop Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <input
                type="text"
                placeholder="Shop Location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
            />
            <button onClick={handleAddShop}>Add Shop</button>
        </div>
    );
};

export default AddShop;

