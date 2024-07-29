import React from 'react';

const Product = ({ product }) => {
    return (
        <div>
            <h3>{product.name}</h3>
            <p>Price: ${product.price}</p>
        </div>
    );
};

export default Product;

