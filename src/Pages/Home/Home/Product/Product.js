import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Product.css'

const Product = (props) => {
    const {_id, name,price, img,quantity,supplier, description} = props.product;
    const navigate = useNavigate()
    const navigateUpdate = (id) =>{
        navigate(`product/${id}`)
    }
    return (
        <div  id='product' className='row '>
            <div >
            <img height={200} className='img-fluid mb-3' src={img} alt="" />
            <h3>Name: {name}</h3>
            <h4>Supplier:{supplier}</h4>
            <h5>Price: ${price}</h5>
            <p>{description}</p>
            <p> <span>Quantity:{quantity}</span></p>
            <button onClick={() => navigateUpdate(_id)} className='from-btn'>Up Date</button>
            </div>
        </div>
    );
};

export default Product;