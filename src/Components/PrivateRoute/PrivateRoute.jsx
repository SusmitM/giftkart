
import { useAuthContext } from '../../context/auth/authContext'
import { Navigate, useLocation } from 'react-router-dom';

export const PrivateRoute = ({children}) => {
  let location = useLocation();
    const {loginToken}=useAuthContext();
  return loginToken ? children : <Navigate to="/signin" state={{ from: location }} />
    
  
}
