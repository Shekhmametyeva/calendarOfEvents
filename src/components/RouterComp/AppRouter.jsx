import React, {useContext} from 'react';
import {Route, Routes} from "react-router-dom";
import {AuthContext} from "../../context";
import Authorization from "../pages/Authorization/Authorization";
import {privateRoutes} from "../../router/";
import PrivateRoute from "./PrivateRoute";


const AppRouter = () => {
    const {isLoadingPage} = useContext(AuthContext);

    if (isLoadingPage) {
        return <div>Загрузка...</div>
    }

    const createRoute = (arrRoutes) => {
        return arrRoutes.map((route) => (
            <Route key={route.path} path={route.path} element={route.element}/>
        ));
    }

    return (
        <Routes>
            <Route path='/authorization' element={<Authorization/>}/>
            <Route element={<PrivateRoute/>}>
                {createRoute(privateRoutes)}
            </Route>
        </Routes>
    );
};

export default AppRouter;