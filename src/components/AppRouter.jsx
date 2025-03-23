import React, {useContext} from 'react';
import {Route, Routes} from "react-router-dom";
import {privateRoutes, publicRoutes} from "../router";
import {AuthContext} from "../context";


const AppRouter = () => {
    const {isAuth, isLoading} = useContext(AuthContext);

    if (isLoading) {
        return <div>Загрузка...</div>
    }

    return (
        isAuth
        ?
        <Routes>
            {privateRoutes.map((route) => (
                <Route key={route.path} path={route.path} element={route.element}/>
            ))}
        </Routes>
        :
        <Routes>
            {publicRoutes.map((route) => (
                <Route key={route.path} path={route.path} element={route.element}/>
            ))}
        </Routes>
    );
};

export default AppRouter;