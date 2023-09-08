import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function CREATE() {
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productStock, setProductStock] = useState('');
  const [productDescription, setProductDescription] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newProduct = {
      Name: productName,
      Price: productPrice,
      Stock: productStock,
      Description: productDescription, 
    };

    try {
      const response = await axios.post('http://localhost:5000/api/products', newProduct);
      console.log('Product data submitted:', response.data);
      navigate('/'); 
    } catch (error) {
      console.error('Error submitting product data:', error);
    }
  };

  return (
    <div>
      <Container>
        <h1>Create New Product</h1>
      </Container>

      <Container>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="productName">
            <Form.Label>Product Name</Form.Label>
            <Form.Control
              type="text"
              name="productName"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group controlId="productPrice">
            <Form.Label>Price</Form.Label>
            <Form.Control
              type="text"
              name="productPrice"
              value={productPrice}
              onChange={(e) => setProductPrice(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group controlId="productStock">
            <Form.Label>Stock</Form.Label>
            <Form.Control
              type="text"
              name="productStock"
              value={productStock}
              onChange={(e) => setProductStock(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group controlId="productDescription"> 
            <Form.Label>Description</Form.Label> 
            <Form.Control
              type="text"
              name="productDescription"
              value={productDescription}
              onChange={(e) => setProductDescription(e.target.value)}
              required
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    </div>
  );
}

export default CREATE;
