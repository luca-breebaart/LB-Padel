import React from 'react';
import styles from './Style.Footer.module.scss';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className={styles.Footer}>
      <div className={styles.container}>
        <div className={styles.FooterLinks}>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/ProductPage">Products</a></li>
            <li><a href="">About Us</a></li>
            <li><a href="">Contact</a></li>
          </ul>
        </div>
        <div className={styles.FooterLogo}>
          <h2>LB Padel Store</h2>
        </div>
        <div className={styles.FooterSocial}>
          <ul>
            <li><a href="#"><FaFacebookF /></a></li>
            <li><a href="#"><FaTwitter /></a></li>
            <li><a href="#"><FaInstagram /></a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
