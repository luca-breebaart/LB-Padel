import React from 'react';
import ProductsList from './ProductsList.js'
import styles from './Style.Products.module.scss';

const Products = () => {
  return (
    <div className={styles.productsContainer} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <ProductsList />
    </div>
  );
};

export default Products;