import { useLocation, Navigate, Outlet } from "react-router-dom";
import {useAuthContext} from "../context/AuthContext";

const RequiredAuth = ({ allowedRoles }) => {
    const { user } = useAuthContext();
    const location = useLocation();
    var Roles = user?.rolesAssigned;

console.log(user,Roles, allowedRoles);
    return (
        Roles?.find(role => allowedRoles?.includes(role))
            ? <Outlet />
            : user
                ? <Navigate to="/unauthorized" state={{ from: location }} replace />
                : <Navigate to="/signin" state={{ from: location }} replace />
        
    );
}

export default RequiredAuth;
