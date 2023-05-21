import React from 'react'
import { useAuthContext } from '../../context/auth/authContext'
import { Navigate } from 'react-router-dom';

export const PrivateRoute = ({children}) => {
    const {loginToken}=useAuthContext();
  return loginToken ? children : <Navigate to="/signin" />
    
  
}
