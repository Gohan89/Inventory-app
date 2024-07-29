import React from 'react';

const Shop = ({ shop }) => {
    return (
        <div>
            <h3>{shop.name}</h3>
            <p>Location: {shop.location}</p>
        </div>
    );
};

export default Shop;

