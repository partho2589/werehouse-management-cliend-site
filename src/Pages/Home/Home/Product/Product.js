import React from 'react';

const Product = (props) => {
    console.log(props)
    const {_id, name,price, img, description} = props.product;
    return (
        <div className='row'>
            <img src={img} alt="" />
            <h2>Name:{name}</h2>
            <h5>Price:{price}</h5>
            <p>{description}</p>
            
        </div>
    );
};

export default Product;