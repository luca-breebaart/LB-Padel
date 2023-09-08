import React, { useState } from 'react';
import styles from "./Style.NavBar.module.scss";
import { FaSearch, FaShoppingBag } from "react-icons/fa"; 
import { Link } from 'react-router-dom';


import LoginModal from './LoginModal';
import SignUpModal from './SignUpModal';

const NavBar = () => {


  const [showLoginModal, setShowLoginModal] = useState(false);

  const toggleLoginModal = () => {
    setShowLoginModal(!showLoginModal);
  };

  const [showSignUpModal, setShowSignUpModal] = useState(false);

  const toggleSignUpModal = () => {
    setShowSignUpModal(!showSignUpModal);
  };

  const user = localStorage.getItem("token");
  const aadmin = localStorage.getItem("isAdmin");
  const normalUser = localStorage.getItem("normalUser");

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("isAdmin");
    localStorage.removeItem("normalUser");
    localStorage.removeItem("CartPage");
    localStorage.removeItem("UpdateID");
    // window.location.reload();
    window.location = "/";
  };


  return (
    <div>

      <nav className={styles.navbar}>

        <div>
          <ul className={styles["nav-links"]}>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/ProductPage">Products</a>
            </li>
          </ul>
        </div>
        <div className={styles.searchBar}>
          <input type="text" placeholder="Search" />
          <FaSearch className={styles.searchIcon} />
        </div>
        <div className='{styles.right}'>
          <Link to="/CartPage" className={styles.shoppingBag}>
            <FaShoppingBag />
          </Link>
          {!user && <button className="btn btn-outline-info my-2 my-sm-0 mgl" variant="link" onClick={toggleLoginModal} style={{ margin: '0 10px' }}>Login</button>}
          {!user && <button className="btn btn-outline-info my-2 my-sm-0 mgl" variant="link" onClick={toggleSignUpModal} style={{ margin: '0 10px' }}>Sign Up</button>}
          {user && <button className="btn btn-outline-danger my-2 my-sm-0" variant="link" onClick={handleLogout} style={{ margin: '0 10px' }}>Logout</button>}
        </div>
      </nav>
      <LoginModal show={showLoginModal} onHide={toggleLoginModal} />
      <SignUpModal show={showSignUpModal} onHide={toggleSignUpModal} />
    </div>
  );
};

export default NavBar;
