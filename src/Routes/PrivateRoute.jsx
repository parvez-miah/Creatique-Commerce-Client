
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const PrivateRoute = ({children}) => {
    const { user, loading } = useAuth();
    const location = useLocation();

    if (loading) {
        return <progress className="progress progress-secondary w-56" value="100" max="100"></progress>
    }


    if (user){
        return children;
    }

    

    return <Navigate to ="/login" state={{from:location}}></Navigate>

  
}

export default PrivateRoute