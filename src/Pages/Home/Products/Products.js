import React, { useEffect, useState } from 'react';
import Product from '../Home/Product/Product';

const Products = () => {
    const [products, setProducts] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/product')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
    return (
        <div>
            <h1>Our Products</h1>
            {
                products.map(product => <Product
                key={product._id}
                product= {product}
                ></Product>)
            }
        </div>
    );
};

export default Products;