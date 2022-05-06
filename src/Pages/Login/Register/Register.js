import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div id='from-container'  className=' container w-50 mx-auto mt-5 b'>
            <h3 className='from-title'>Please Register</h3>
            <Form>
                <Form.Group className="mb-3 " controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Name"  />
                </Form.Group>
                <Form.Group className="mb-3 " controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" required/>
                </Form.Group>
                <Button className=' from-btn mb-2' variant="" type="submit">
                   Register
                </Button>
            </Form>
            <p>New to Fruits warehouse? <Link to='/login' className='text-primary pe-auto text-decoration-none'>Please Login</Link></p>
        </div>
    );
};

export default Register;