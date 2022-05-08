import React from 'react';
import './About.css'
import img from '../../image/partho-malo.png'
const About = () => {
    return (
        <div className='text-center mt-5'>
            <h3>Name: Partho Malo </h3>
            <img className='fluid' height={480} width={500} src={img} alt="" />
        </div>
    
    );
    
};

export default About;