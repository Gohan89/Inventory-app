import React from 'react';

const CartItem = ({ product, onRemove }) => {
    return (
        <div>
            <h4>{product.name}</h4>
            <p>Price: ${product.price}</p>
            <p>Quantity: {product.quantity}</p>
            <button onClick={() => onRemove(product.id)}>Remove</button>
        </div>
    );
};

export default CartItem;

