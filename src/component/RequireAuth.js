import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../firebase.init';

const RequireAuth = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    console.log('Inside Require Auth', auth);
    let location = useLocation();

    if (loading) {
        return <p>Loading...</p>
    }
    if (!user) {

        return <Navigate to="/" state={{ from: location }} replace />;
    }

    return children;
};

export default RequireAuth;