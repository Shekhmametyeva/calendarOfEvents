import React, {useContext} from 'react';
import {Route, Routes} from "react-router-dom";
import {privateRoutes, publicRoutes} from "../router";
import {AuthContext} from "../context";


const AppRouter = () => {
    const {userId, isLoadingPage} = useContext(AuthContext);

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
            {userId ? createRoute(privateRoutes) : createRoute(publicRoutes)}
        </Routes>
    );
};

export default AppRouter;