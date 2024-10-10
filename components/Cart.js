// src/components/Cart.js
import React from 'react';

const Cart = ({ cartItems }) => {
    return (
        <div>
            <h2>Your Cart</h2>
            {cartItems.length === 0 ? <p>No items in cart.</p> : cartItems.map(item => <div key={item.id}>{item.name}</div>)}
        </div>
    );
};

export default Cart;
