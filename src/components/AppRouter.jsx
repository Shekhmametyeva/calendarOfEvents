import React, {useContext} from 'react';
import {Route, Routes} from "react-router-dom";
import {privateRoutes, publicRoutes} from "../router";
import {AuthContext} from "../context";


const AppRouter = () => {
    const {userId, isLoadingPage} = useContext(AuthContext);

    if (isLoadingPage) {
        return <div>Загрузка...</div>
    }
    console.log(userId);

    return (
        userId
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