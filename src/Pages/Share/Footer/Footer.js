import React from 'react';
import './Footer.css'
const Footer = () => {
   const today = new Date();
   const year = today.getFullYear();
    return (
        <div className='footer-container '>
            <p className='text-center mx-auto '>CopyRight Pure Fruit WereHouse {year}</p>
        </div>
    );
};

export default Footer;