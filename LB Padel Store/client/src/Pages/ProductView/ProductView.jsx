import React, { useEffect, useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import styles from './Style.ProductView.module.scss'; // Import the updated styles

const ProductView = () => {
    const { productId } = useParams(); // Get the product ID from the URL params
    const [product, setProduct] = useState(null);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        // Fetch the product data by ID
        axios
            .get(`http://localhost:5000/api/products/${productId}`)
            .then((response) => {
                setProduct(response.data);
            })
            .catch((error) => {
                console.error('Error fetching product data:', error);
            });
    }, [productId]);

    if (!product) {
        return (
            <div className={styles.loading}>
                Loading product information...
            </div>
        );
    }


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

    return (
        <Card className={`shadow ${styles.productCard}`}>
            <Card.Body>
                <div className={styles.productContent}>
                    {/* <div className={styles.productImage}>
            <img
              src={product.imageURL}
              alt={product.Name} // Updated property name
              className="img-fluid"
            />
          </div> */}
                    <div className={styles.description}>
                        <h1>{product.Name}</h1> {/* Updated property name */}
                        <p><strong>Price:</strong> ${product.Price}</p> {/* Updated property name */}
                        <p><strong>Description:</strong> {product.Description}</p> {/* Updated property name */}


                        <div className={styles.button}>
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
                        </div>
                    </div>
                </div>
            </Card.Body>
        </Card>
    );
};

export default ProductView;
