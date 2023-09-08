import React, { useEffect, useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function UPDATE() {
  const [Name, setName] = useState('');
  const [Price, setPrice] = useState('');
  const [Stock, setStock] = useState('');
  const [Description, setDescription] = useState(''); 

  const navigate = useNavigate();

  useEffect(() => {
    const productId = localStorage.getItem('UpdateID');

    if (productId) {
      axios
        .get(`http://localhost:5000/api/products/${productId}`)
        .then((response) => {
          const productData = response.data;
          console.log(productData);
          setName(productData.Name);
          setPrice(productData.Price);
          setStock(productData.Stock);
          setDescription(productData.Description); 
        })
        .catch((error) => {
          console.error('Error fetching product data:', error);
        });
    }
  }, []);

  const handleUpdate = () => {
    const payload = {
      Name: Name,
      Price: Price,
      Stock: Stock,
      Description: Description, 
    };

    try {
      const productId = localStorage.getItem('UpdateID');

      axios
        .put(`http://localhost:5000/api/products/${productId}`, payload) // Updated the endpoint to "/api/products"
        .then((response) => {
          console.log('Product data updated:', response);
          navigate('/');
        })
        .catch((error) => {
          console.error('Error submitting product data:', error);
        });

      localStorage.removeItem('UpdateID');
    } catch (error) {
      console.error('Error submitting product data:', error);
    }

    window.location = '/';
  };

  return (
    <div>
      <Container>
        <h1>Edit Product: {Name}</h1>
      </Container>

      <Container>
        <Form onSubmit={handleUpdate}>
          <Form.Group controlId="Name">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              name="Name"
              value={Name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group controlId="Price">
            <Form.Label>Price</Form.Label>
            <Form.Control
              type="text"
              name="Price"
              value={Price}
              onChange={(e) => setPrice(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group controlId="Stock">
            <Form.Label>Stock</Form.Label>
            <Form.Control
              type="text"
              name="Stock"
              value={Stock}
              onChange={(e) => setStock(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group controlId="Description"> 
            <Form.Label>Description</Form.Label> 
            <Form.Control
              type="text"
              name="Description"
              value={Description}
              onChange={(e) => setDescription(e.target.value)} 
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

export default UPDATE;
