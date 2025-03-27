import React, {useContext} from 'react';
import {Navigate, Outlet, useLocation} from "react-router-dom";
import {AuthContext} from "../../context";

const PrivateRoute = () => {
    const { userId } = useContext(AuthContext);
    const location = useLocation();

    return (
        userId
            ? <Outlet />
            : <Navigate to="/authorization" state={{ from: location }} replace />
    );
}

export default PrivateRoute;