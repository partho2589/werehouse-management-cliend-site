
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './ProductDetail.css'
const ProductDetail = () => {
    const { productId } = useParams()
    const [product, setProduct] = useState({});
    useEffect(() => {
        const url = `http://localhost:5000/product/${productId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])
    console.log(product)
    const { _id, name, img, price, description, quantity, supplier } = product;
    return (
        <div className=' products-container container'>

            <div id='product' className='row '>
                <img height={200} className='img-fluid mb-3' src={img} alt="" />
                <h3>Name: {name}</h3>
                <h4>Supplier:{supplier}</h4>
                <h5>Price: ${price}</h5>
                <p>{description}</p>
                <p> <span>Quantity:{quantity}</span></p>
                <button className='from-btn'>Up Date</button>
            </div>
            
        </div>
    );
};

export default ProductDetail;