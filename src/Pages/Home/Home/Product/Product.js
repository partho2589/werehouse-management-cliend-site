import React from 'react';
import './Product.css'
const Product = (props) => {
    console.log(props)
    const {_id, name,price, img, description} = props.product;
    return (
        <div  id='product' className='row '>
            <div >
            <img height={200} className='img-fluid mb-3' src={img} alt="" />
            <h3>Name: {name}</h3>
            <h5>Price: ${price}</h5>
            <p>{description}</p>
            <button className='from-btn'>By now</button>
            </div>
        </div>
    );
};

export default Product;