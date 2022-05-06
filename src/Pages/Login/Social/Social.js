import React from 'react';
import './Social.css'
import googleIcon from '../../../image/icon/google-icon.png'
const Social = () => {
    
    return (

        <div>
            <div className='d-flex align-items-center justify-content-center'>
                <div style={{ height: "1px" }} className='bg-info w-50'></div>
                <p className='mt-3 px-2'>Or</p>
                <div style={{ height: "1px" }} className='bg-info w-50'></div>
            </div>

            <div>
                <button
                   id='google-btn'
                    className=' w-50 d-block mx-auto'>
                    <img src={googleIcon} alt="" />
                    <span className='px-3'>Google Sign In</span>
                </button>
            </div>
        </div>
    );
};

export default Social;