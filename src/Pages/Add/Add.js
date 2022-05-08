import React from 'react';
import { useForm } from "react-hook-form";
const Add = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        
        const url = 'https://mysterious-ridge-18976.herokuapp.com/manage'
        fetch(url, {
            method:'POST',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(result => {
            console.log(result)
        })
        
        console.log(data)
    };


    return (


        <div className='w-50 mx-auto'>
            <h1 className='text-center'>Add Iter </h1>
            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                <input className='mb-3' placeholder='Name'{...register("name", { required: true, maxLength: 20 })} />
                <textarea className='mb-3' placeholder='Description' {...register("description")} />
                <input className='mb-3' placeholder='Supplier Name ' type="text" {...register("supplier")} />
                <input className='mb-3' placeholder=' Photo URL' type="text" {...register("img")} />
                <input className='mb-3' placeholder='Price' type="price" {...register("price")} />
                <input className='mb-3' placeholder='Quantity' type="price" {...register("quantity")} />
                <input value='Add Item' type="submit" />
            </form>
        </div>
    );
};

export default Add;