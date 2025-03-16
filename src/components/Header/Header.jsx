import React from "react";
import cl from './Header.module.css';
import iconUser from '../../assets/icon/sprite.svg';
import SvgIcon from "../UI/SvgIcon/SvgIcon";

const Header = () => {
    return (
        <header className={cl.header}>
            <div className={cl.headerContainer}>
                <div className={cl.userContainer} onClick={() => {console.log('click')}}>
                    <SvgIcon classIcon={cl.iconUser} idIcon={'user'}/>
                </div>
            </div>
        </header>
    )
}

export default Header;