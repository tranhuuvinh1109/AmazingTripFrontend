import { useLocation, Navigate, Outlet } from "react-router-dom";
import getCookie from '../hooks/getCookie';


const RequireAuth = () => {
    const location = useLocation();

    return (
        getCookie('userin') ? <Outlet />
            : <Navigate to ='/landing' state = {{ from: location }} replace />
    );
}

export default RequireAuth;