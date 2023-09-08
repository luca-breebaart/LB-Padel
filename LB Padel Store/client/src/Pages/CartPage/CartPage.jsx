import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Cart from "../../Components/Cart";
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import styles from './Style.CartPage.module.scss';

function CartPage() {
    return (
        <div className={styles.CartPage}>
            <div>
                <h1>Cart Page</h1>
            </div>

            <div className="cart-container">
                <Cart />
            </div>

            <div className={styles.cartButtons}>
               
                <Link to="/Checkout" className="btn btn-primary">
                    Checkout
                </Link>
            </div>
        </div>
    );
}

export default CartPage;
