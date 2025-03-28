import React from 'react';
import cl from 'components/UI/Button/Button.module.css'

const Button = ({children, ...props}) => {
    return (
        <button className={cl.btn} {...props}>{children}</button>
    );
};

export default Button;