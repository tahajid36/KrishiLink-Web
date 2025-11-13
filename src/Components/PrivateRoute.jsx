import React, { use } from 'react';
import { AuthContext } from '../Layout/AuthProvider';
import Loading from './Loading';
import { Navigate, useLocation } from 'react-router';

const PrivateRoute = ({children}) => {
    const location = useLocation()
    const {user, loading} = use(AuthContext)

    if(loading){
        return <Loading></Loading>
    }

    if(user && user.email){
        return children
    }


   else{
    return <Navigate state={location.pathname} to={'/login'}></Navigate>
   }
};

export default PrivateRoute;