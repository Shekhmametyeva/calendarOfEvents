import React from 'react';
import cl from './Inpute.module.css'

const Input = (props) => {
    return (
        <input className={cl.input} {...props}/>
    );
};

export default Input;