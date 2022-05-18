import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
import { NavLink } from 'react-router-dom';
import auth from '../firebase.init';

const Navbar = () => {
    const [user] = useAuthState(auth);
    const handleSignOut = () => {
        signOut(auth);
    }
    return (
        <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="">
                    <NavLink className='p-2' to='/'>Home</NavLink>
                    <NavLink to='/task'>Task</NavLink>
                    {
                        user ?
                            <button className='btn btn-link text-decoration-none' onClick={handleSignOut}>Sign Out</button>
                            :
                            <NavLink className='p-2' to="/login">
                                Login
                            </NavLink>
                    }
                    <p className=' mt-3 text-success'>Logged As: {user?.email}</p>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;