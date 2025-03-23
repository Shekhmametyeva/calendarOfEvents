import React, {useContext} from "react";
import cl from './Header.module.css';
import SvgIcon from "../UI/SvgIcon/SvgIcon";
import {useNavigate} from "react-router-dom";
import {AuthContext} from "../../context";

const Header = () => {
    const {userId} = useContext(AuthContext);
    const navigate = useNavigate();

    return (
        <header className={cl.header}>
            <div className={cl.headerContainer}>
                {userId && (
                    <div className={cl.userContainer} onClick={() => navigate('/', { replace: false })}>
                        <SvgIcon classIcon={cl.icon} idIcon={'home'}/>
                    </div>)
                }
                {userId && (
                    <div className={cl.userContainer} onClick={() => navigate('personal-account', { replace: false })}>
                        <SvgIcon classIcon={cl.icon} idIcon={'user'}/>
                    </div>)
                }
            </div>
        </header>
    )
}

export default Header;