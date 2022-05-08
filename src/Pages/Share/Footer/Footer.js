import React from 'react';
import { Link } from 'react-router-dom';

import './Footer.css'
const Footer = () => {
   const today = new Date();
   const year = today.getFullYear();
    return (
        <div className='footer-container '>
            <div className='d-flex align-items-center justify-content-center  mt-5'>
            <Link className='text-white' to='/about'> About </Link>
            
            </div>
            <p className='text-center mx-auto text-white mt-5'>CopyRight Pure Fruit WereHouse {year}</p>
        </div>
    );
};

export default Footer;