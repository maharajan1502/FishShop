// src/App.js
import React, { useState } from 'react';
import Header from './components/Header';
import ProductList from './components/ProductList';
import Cart from './components/Cart';

const App = () => {
   const [cart, setCart] = useState([]);
   const products = [
       { id: 1, name: 'Salmon', price: 10 },
       { id: 2, name: 'Tuna', price: 15 },
       { id: 3, name: 'Trout', price: 12 },
   ];

   const addToCart = (product) => {
       setCart([...cart, product]);
   };

   return (
       <div>
           <Header />
           <ProductList products={products} addToCart={addToCart} />
           <Cart cartItems={cart} />
       </div>
   );
};

export default App;
