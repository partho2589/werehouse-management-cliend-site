import React from 'react';
import { Link } from 'react-router-dom';
import Banner from '../Banner/Banner';
import Products from '../Products/Products';
import './Home.css'

const Home = () => {

    return (
        <div>
            <Banner></Banner>
            <Products></Products>
           <div className=' mt-5 d-flex align-items-center justify-content-center'>
           <Link className='manage-link ' to='/manage'> Manage Item</Link> 
           </div>
        </div>
    );
};

export default Home;