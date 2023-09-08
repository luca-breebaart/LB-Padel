import React, { useEffect, useState } from 'react';
import ProductsCard from './ProductsCard'; // Correct the import name
import { Row } from 'react-bootstrap';
import axios from 'axios';


const ProductsList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/api/AllProducts')
            .then(result => {
              setProducts(result.data);
            })
            .catch(err => console.log(err))
        localStorage.removeItem("UpdateID");
    }, [])

    return (
        <Row>
            {products.map((product) => (
                <ProductsCard key={product._id} product={product} /> 
            ))}
        </Row>
    );
};

export default ProductsList;
