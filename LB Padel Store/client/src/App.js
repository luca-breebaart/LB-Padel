import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './Pages/Home/Home';
import NavBar from './Components/NavBar/NavBar';
import CartPage from './Pages/CartPage/CartPage';
import ProductPage from './Pages/ProductPage/ProductPage';
import Footer from './Components/Footer/Footer';

import ProductView from './Pages/ProductView/ProductView';

import CREATE from './Pages/create';
import UPDATE from './Pages/update';
import Checkout from './Pages/Checkout/Checkout'; // Import the Checkout component

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/CartPage' element={<CartPage />} />
        <Route path='/ProductPage' element={<ProductPage />} />
        <Route path='/CREATE' element={<CREATE />} />
        <Route path='/UPDATE' element={<UPDATE />} />

        <Route path="/product/:productId" element={<ProductView />} />

        {/* Add a route for the Checkout page */}
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
