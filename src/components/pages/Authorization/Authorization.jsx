import React, {useContext} from 'react';
import cl from './Authorization.module.css'
import Input from "../../UI/Input/Input";
import Button from "../../UI/Button/Button";
import {AuthContext} from "../../../context";

const Authorization = () => {
    const {setIsAuth} = useContext(AuthContext);
    const login = (event) => {
        event.preventDefault()
        setIsAuth(true);
        localStorage.setItem('auth', 'true');
    }
    return (
        <div>
            <h1>Авторизация</h1>
            <form className={cl.authorization__form} onSubmit={login}>
                <Input type="text" placeholder={'Логин'}/>
                <Input type="password" placeholder={'Пароль'}/>
                <Button>Войти</Button>
            </form>
        </div>
    );
};

export default Authorization;