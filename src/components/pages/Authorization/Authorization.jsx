import React, {useContext} from 'react';
import {useLocation, useNavigate} from "react-router-dom";
import {AuthContext} from "context";
import cl from 'components/pages/Authorization/Authorization.module.css'
import Input from "components/UI/Input/Input";
import Button from "components/UI/Button/Button";

const Authorization = () => {
    const {setUserId} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const login = (event) => {
        event.preventDefault();
        // временный хардкод заменяющий авторизацию, получаем ид клиента
        const userId = '0ff617b5-3691-4e20-b58b-7e91740aed06';
        setUserId(userId);
        localStorage.setItem('auth', userId);
        navigate(from);
    }

    return (
        <div>
            <h1>Авторизация</h1>
            <form className={cl.authorization_form} onSubmit={login}>
                <Input type="text" placeholder={'Логин'}/>
                <Input type="password" placeholder={'Пароль'}/>
                <Button>Войти</Button>
            </form>
        </div>
    );
};

export default Authorization;