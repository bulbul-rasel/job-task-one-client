import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../firebase.init';


const Login = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate()

    if (error) {
        <p className='text-danger'>Error: {error?.message} </p>
    }
    if (loading) {
        return <p>Loading...</p>
    }
    if (user) {
        navigate('/home')
    }
    return (
        <div className=' d-flex justify-content-center align-items-center'>
            <button
                onClick={() => signInWithGoogle()}
                className='btn btn-info w-25 rounded-pill mb-3 '>
                Google Sign in
            </button>
        </div>
    );
};

export default Login;