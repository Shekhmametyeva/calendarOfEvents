import React, {useEffect} from "react";
import cl from './Header.module.css';
import SvgIcon from "../UI/SvgIcon/SvgIcon";
import {useNavigate} from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();

    return (
        <header className={cl.header}>
            <div className={cl.headerContainer}>
                <div className={cl.userContainer} onClick={() => navigate('personal-account', { replace: false })}>
                    <SvgIcon classIcon={cl.iconUser} idIcon={'user'}/>
                </div>
            </div>
        </header>
    )
}

export default Header;