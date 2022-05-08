import React from 'react';

const Item = (props) => {
    const { _id, name, price, img, quantity, supplier, description } = props.item;

    const deleteItem = id =>{
        const proceed = window.confirm('Are You sure you wand to delete item?')
        if(proceed){
            const url = `https://mysterious-ridge-18976.herokuapp.com/manage/${id}`
            fetch(url, {
                method:'DELETE'
            })
            .then(res => res.json())
            .then(data=> console.log(data))
        }
    }
    return (
        <div id='product' className='row '>
            <div >
                <img height={200} className='img-fluid mb-3' src={img} alt="" />
                <h3>Name: {name}</h3>
                <h4>Supplier:{supplier}</h4>
                <h5>Price: ${price}</h5>
                <p>{description}</p>
                <p> <span>Quantity:{quantity}</span></p>
                <button onClick={() => deleteItem(_id)} className='from-btn'>Delete Item</button>
            </div>
        </div>

    )
};

export default Item;