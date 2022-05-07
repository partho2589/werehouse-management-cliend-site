import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';

import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Share/Loading/Loading';
import './Login.css'

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const navigate = useNavigate();

    const location = useLocation()
    const from = location.state?.from?.pathname || '/'
   
    const handleEmailBlur = event => {
        setEmail(event.target.value);
    }

    const handlePasswordBlur = event => {
        setPassword(event.target.value);
    }

    if (user) {
        navigate("/home");
    }

    const handleUserSignIn = event => {
        event.preventDefault();
        signInWithEmailAndPassword(email, password);
    }

    return (
        <div className='form-container mt-5'>
            <div className='mb-3'>
                <h2 className='from-title text-center mt-3'>Login</h2>
                <form onSubmit={handleUserSignIn}>
                    <div className="input-group">
                        <label className='mt-2 me-2 fs-5' htmlFor="email">Email</label>
                        <input onBlur={handleEmailBlur} type="email" name="email" id="" required />
                    </div>
                    <div className="input-group">
                        <label className='mt-2 me-2 fs-5' htmlFor="password">Password</label>
                        <input onBlur={handlePasswordBlur} type="password" name="password" id="" required />
                    </div>
                    <p style={{ color: 'red' }}>{error?.message}</p>
                    {
                        loading && <Loading></Loading>
                    }
                    <input className='from-submit w-50 mx-auto d-block' type="submit" value="Login" />
                </form>
                <p>
                    New to Fruits warehouse ? <Link className='form-link' to="/register">Create an account</Link>
                </p>
                 
            </div>
        </div>
    );
};

export default Login;