import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import ProductsCard from './Products/ProductsCard';
import { Card, Button } from 'react-bootstrap';

const Cart = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const cartData = JSON.parse(localStorage.getItem('cart'));
    if (cartData) {
      setCart(cartData);
    }
  }, []);

  const handleClearLocalStorage = () => {
    localStorage.clear();
    // Optionally, you can update the cart state to an empty array if needed
    setCart([]);
    // Optionally, you can reload the page or navigate to another page
    window.location.reload();
  };

  return (
    <div>

      <Row>
        {cart.map((product, index) => (
          <ProductsCard key={index} product={product} />
        ))}
      </Row>

      <Button variant="danger" onClick={handleClearLocalStorage}>
        Clear Cart
      </Button>

    </div>
  );

};

export default Cart;
