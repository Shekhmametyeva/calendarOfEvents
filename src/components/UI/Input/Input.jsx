import React from 'react';
import cl from 'components/UI/Input/Inpute.module.css'

const Input = (props) => {
    return (
        <input className={cl.input} {...props}/>
    );
};

export default Input;