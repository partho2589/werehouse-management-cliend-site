import React from 'react';

const Footer = () => {
   const today = new Date();
   const year = today.getFullYear();
    return (
        <div>
            <p className='text-center mx-auto '>CopyRight Pure Fruit WereHouse {year}</p>
        </div>
    );
};

export default Footer;