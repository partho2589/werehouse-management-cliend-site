import React from 'react';
import './Login.css'
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div id='from-container'  className=' container w-50 mx-auto mt-5 b'>
            <h3 className='from-title'>Please Login</h3>
            <Form>
                <Form.Group className="mb-3 " controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" required/>
                </Form.Group>
                <Button className=' from-btn' variant="" type="submit">
                   Login
                </Button>
            </Form>
            <p>New to Fruits werehoues? <Link to='/register' className='text-primary pe-auto text-decoration-none'>Please Register</Link></p>
        </div>
    );
};

export default Login;