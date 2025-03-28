import {Navigate} from "react-router-dom";
import Home from "components/pages/Home/Home";
import PersonalAccount from "components/pages/PersonalAccount/PersonalAccount";
import Error from "components/pages/Error/Error";


export const privateRoutes = [
    {path: '/', element: <Navigate to="/home" replace />},
    {path: '/home', element: <Home/>},
    {path: '/personal-account', element: <PersonalAccount/>},
    {path: 'error', element: <Error/>},
    {path: '*', element: <Navigate to="/home" replace />},
];

export const adminRoutes = [
    {path: '/', element: <Navigate to="/home" replace />},
    {path: '/home', element: <Home/>},
    {path: '/personal-account', element: <PersonalAccount/>},
    {path: 'error', element: <Error/>},
    {path: '*', element: <Navigate to="/home" replace />},
];