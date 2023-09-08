import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Style.ProductPage.module.scss';
import Products from '../../Components/Products/Products';

const ProductPage = () => {
  return (
    <div className={styles.homePage}>
      <div className={styles.banner}>
        <div>
          <h1>View all our products!</h1>
          <p>Discover amazing products for your needs.</p>
        </div>
      </div>

      <Products />
    </div>
  );
};

export default ProductPage;
