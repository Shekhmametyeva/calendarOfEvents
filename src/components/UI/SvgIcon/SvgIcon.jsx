import React from 'react';
import spriteSvg from "../../../assets/icon/sprite.svg";

const SvgIcon = ({idIcon, classIcon}) => {
    return (
        <svg className={classIcon}>
            <use href={spriteSvg + '#' + idIcon}/>
        </svg>
    );
};

export default SvgIcon;