import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const ProductsCard = ({ product }) => {
  const [cart, setCart] = useState([]); 

  const handleDelete = (productID) => {
    console.log(productID);
    axios
      .delete(`http://localhost:5000/api/products/${productID}`)
      .then(() => {
        window.location.reload(); 
      })
      .catch((err) => console.log(err));
  };

  const handleUpdate = (productID) => {
    localStorage.setItem("UpdateID", productID);
    window.location = "/UPDATE";
  };

  const handleAddToCart = (productName, productPrice, productStock, productDescription) => {
    const newProduct = {
      Name: productName,
      Price: productPrice,
      Stock: productStock,
      Description: productDescription
    };

    // Load the existing products from localStorage
    const existingCart = JSON.parse(localStorage.getItem('cart')) || [];

    // Add the new product to the cart
    const updatedCart = [...existingCart, newProduct];

    // Update the cart state with the new products list
    setCart(updatedCart);

    // Store the updated cart list in localStorage
    localStorage.setItem('cart', JSON.stringify(updatedCart));

    console.log(localStorage.getItem('cart'));
  };

  const navigate = useNavigate(); 

  const handleView = (productID) => {

    navigate(`/product/${productID}`);
  };

  const user = localStorage.getItem("token");
  const isAdmin = localStorage.getItem("isAdmin");
  const normalUser = localStorage.getItem("normalUser");

  return (
    <Card className='shadow' style={{ width: '18rem', margin: '20px' }}>
      <Card.Body>
        <Card.Title>{product.Name}</Card.Title>
        <Card.Text>
          <strong>Price:</strong> ${product.Price}<br />
          {/* <strong>Stock:</strong> {product.Stock}<br /> */}
          <strong>Description:</strong> {product.Description}
        </Card.Text>

        <Button
          variant="primary"
          onClick={() =>
            handleAddToCart(
              product.Name,
              product.Price,
              product.Stock,
              product.Description
            )
          }
        >
          Add to Cart
        </Button>

        <Button variant="secondary" onClick={() => handleView(product._id)}> 
          View
        </Button>

        {normalUser && (
          <Button
            variant="primary"
            onClick={() =>
              handleAddToCart(
                product.Name,
                product.Price,
                product.Stock,
                product.Description
              )
            }
          >
            Add to Cart
          </Button>
        )}

        {
          isAdmin &&
          ///////////////////////////////////////////////////////////////
          (
            <>
              <Button variant="success" onClick={() => handleUpdate(product._id)}>
                Update
              </Button>
              <Button
                variant="danger"
                onClick={() => handleDelete(product._id)}
                className='mgl'
              >
                Delete
              </Button>
            </>
          )}
      </Card.Body>
    </Card>
  );
};

export default ProductsCard;
