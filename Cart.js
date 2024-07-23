import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const res = await axios.get('/api/cart', {
          headers: {
            'x-auth-token': localStorage.getItem('token'),
          },
        });
        setCartItems(res.data.items);
      } catch (err) {
        console.error(err);
      }
    };

    fetchCartItems();
  }, []);

  return (
    <div>
      <h1>Shopping Cart</h1>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
