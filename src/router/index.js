import Home from "../components/pages/Home/Home";
import PersonalAccount from "../components/pages/PersonalAccount/PersonalAccount";
import Error from "../components/pages/Error/Error";
import Authorization from "../components/pages/Authorization/Authorization";
import {Navigate} from "react-router-dom";

export const privateRoutes = [
    {path: '/', element: <Home/>},
    {path: '/home', element: <Navigate to="/" replace />},
    {path: '/personal-account', element: <PersonalAccount/>},
    {path: 'error', element: <Error/>},
    {path: '*', element: <Navigate to="/error" replace />},
];

export const publicRoutes = [
    {path: '/authorization', element: <Authorization/>},
    {path: '*', element: <Navigate to="/authorization" replace />},
];