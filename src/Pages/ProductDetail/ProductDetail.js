
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './ProductDetail.css'
const ProductDetail = () => {
    const { productId } = useParams()
    const [product, setProduct] = useState({});
    useEffect(() => {
        const url = `https://mysterious-ridge-18976.herokuapp.com/product/${productId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])
    const { _id, name, img, price, description, quantity, supplier } = product;
    return (
        <div >
            <div  className=' row w-50 mx-auto '>
                <img height={200} className='img-fluid mb-3 ' src={img} alt="" />
                <h3>Name: {name}</h3>
                <h4>Supplier: {supplier}</h4>
                <h5>Price: ${price}</h5>
                <p>{description}</p>
                <p> <span>Quantity: {quantity}</span></p>
                <p><small>Id: {_id}</small></p>
                <button className='from-btn'>Delivered</button>
            </div>
            
        </div>
    );
};

export default ProductDetail;