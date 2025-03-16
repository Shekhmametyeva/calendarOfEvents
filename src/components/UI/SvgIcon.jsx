import React from 'react';
import spriteSvg from "../../assets/icon/sprite.svg";

const SvgIcon = ({idIcon}) => {
    return (
        <svg className="iconUser">
            <use href={spriteSvg + '#' + idIcon}/>
        </svg>
    );
};

export default SvgIcon;