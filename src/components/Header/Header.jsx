import React, {useContext} from "react";
import cl from './Header.module.css';
import SvgIcon from "../UI/SvgIcon/SvgIcon";
import {useNavigate} from "react-router-dom";
import {AuthContext} from "../../context";

const Header = () => {
    const {userId} = useContext(AuthContext);
    const navigate = useNavigate();

    const createSvgIcon = (pathNavigate, idIcon) => {
        return (
            <div className={cl.iconContainer} onClick={() => navigate(pathNavigate, { replace: false })}>
                <SvgIcon classIcon={cl.icon} idIcon={idIcon}/>
            </div>)
    }

    return (
        <header className={cl.header}>
            <div className={cl.headerContainer}>
                {userId && createSvgIcon('/', 'home')}
                {userId && createSvgIcon('personal-account', 'user')}
            </div>
        </header>
    )
}

export default Header;