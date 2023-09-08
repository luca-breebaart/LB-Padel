import React, { useEffect, useState } from 'react';
import styles from './Style.Checkout.module.scss'; 
import ProductsCard from '../../Components/Products/ProductsCard';
import { Button, Card } from 'react-bootstrap';

const Checkout = () => {
    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        // Retrieve cart data from localStorage
        const cartData = JSON.parse(localStorage.getItem('cart')) || [];
        setCart(cartData);

        // Calculate the total price of items in the cart
        const totalPrice = cartData.reduce((acc, product) => {
            return acc + parseFloat(product.Price);
        }, 0);

        setTotal(totalPrice);
    }, []);

    const handleCheckout = () => {
        // Implement your checkout logic here (e.g., sending order to a server)
        // After checkout, you can clear the cart and redirect to a success page
        localStorage.removeItem('cart');
        setCart([]);
        // Redirect to a success page or another route as needed
        // Example: window.location = "/checkout-success";
    };

    return (
        <div className={styles.checkoutPage}>
            <Card className={styles.checkoutCard}>
                <Card.Body>
                    <div className={styles.header}>
                        <h1>Checkout</h1>
                    </div>
                    <div className={styles.cartItems}>
                        {cart.map((product, index) => (
                            <ProductsCard key={index} product={product} />
                        ))}
                    </div>
                    <div className={styles.total}>
                        <h3>Total: ${total.toFixed(2)}</h3>
                    </div>
                    <Button variant="primary" onClick={handleCheckout}>
                        Checkout
                    </Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Checkout;
