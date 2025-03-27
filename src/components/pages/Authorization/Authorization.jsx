import React, {useContext} from 'react';
import cl from './Authorization.module.css'
import Input from "../../UI/Input/Input";
import Button from "../../UI/Button/Button";
import {AuthContext} from "../../../context";
import {useNavigate} from "react-router-dom";

const Authorization = () => {
    const {setUserId} = useContext(AuthContext);
    const navigate = useNavigate();

    const login = (event) => {
        event.preventDefault();
        // временный хардкод заменяющий авторизацию, получаем ид клиента
        const userId = '0ff617b5-3691-4e20-b58b-7e91740aed06';
        setUserId(userId);
        localStorage.setItem('auth', userId);
        navigate('/home');
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