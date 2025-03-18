import React from 'react';
import cl from './Button.module.css'

const Button = ({children, ...props}) => {
    return (
        <button className={cl.btn} {...props}>{children}</button>
    );
};

export default Button;