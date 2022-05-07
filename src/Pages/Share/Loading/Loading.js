import React from 'react';
import { Spinner } from 'react-bootstrap';

const Loading = () => {
    return (
        <div className='w-100 mx-auto d-flex justify-content-center align-items-center mt-5 mb-5'>
            <Spinner animation="border" variant="success" />
        </div>
    );
};

export default Loading;