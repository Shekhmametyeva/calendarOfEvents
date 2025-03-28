import React, {useContext} from "react";
import {useNavigate} from "react-router-dom";
import cl from 'components/Header/Header.module.css';
import SvgIcon from "components/UI/SvgIcon/SvgIcon";
import {AuthContext} from "context";

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