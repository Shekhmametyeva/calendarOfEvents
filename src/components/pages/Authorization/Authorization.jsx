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
        const userId = '23e3cef7-bc7d-4776-a6a5-dce8024f17e4';
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