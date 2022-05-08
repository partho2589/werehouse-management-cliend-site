import React, { useEffect, useState } from 'react';
import Product from '../Home/Product/Product';
import './Products.css'
const   Products = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('https://mysterious-ridge-18976.herokuapp.com/product')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div>
            <h1 className='text-center mt-5 mb-3 text-success'>Our Item</h1>
            <div className='products-container container'>
                {
                    products.map(product => <Product
                        key={product._id}
                        product={product}
                    ></Product>)
                }
            </div>
        </div>
    );
};

export default Products;