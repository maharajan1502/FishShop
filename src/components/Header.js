// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ cartCount }) => {
    return (
        <header className='header' style={{ display: 'flex', justifyContent: 'space-between', padding: '10px', background: '#f8f9fa' }}>
            <h1>Fish Shop</h1>
            <Link to="/cart" style={{ textDecoration: 'none', color: 'black' }}>
                <div style={{ position: 'relative' }}>
                    <span role="img" aria-label="cart">🛒</span>
                    {cartCount > 0 && (
                        <span style={{
                            position: 'absolute',
                            top: '-5px',
                            right: '-10px',
                            background: 'red',
                            color: 'white',
                            borderRadius: '50%',
                            padding: '2px 6px',
                            fontSize: '12px'
                        }}>
                            {cartCount}
                        </span>
                    )}
                </div>
            </Link>
        </header>
    );
};

export default Header;
