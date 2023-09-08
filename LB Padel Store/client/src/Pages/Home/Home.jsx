import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Style.Home.module.scss';
import Products from '../../Components/Products/Products';


const Home = () => {
  return (
    <div className={styles.homePage}>
      <div className={styles.banner}>
        <div>
          <h1>Welcome to our Padel Store!</h1>
          <p>Discover amazing products for your needs.</p>
        </div>
      </div> 

      <div className={styles.storeInfo}>
        <div className={styles.storeImage}> 
          <img
            src="https://images.unsplash.com/photo-1526888935184-a82d2a4b7e67?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"           
          />
        </div>
        <div className={styles.storeDescription}>
          <h2>About Our Store</h2>
          <p>
            Welcome to our padel store! We offer a wide range of padel rackets, shoes, balls, and more. Explore our collection and
            find the perfect gear for your padel games.
          </p>
          <Link to="/ProductPage" className={styles.viewProductsButton}>
            View Products
          </Link>
        </div>
      </div>
      <Products />
    </div>
  );
};

export default Home;
