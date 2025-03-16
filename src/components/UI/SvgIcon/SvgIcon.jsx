import React from 'react';
import spriteSvg from "../../../assets/icon/sprite.svg";

const SvgIcon = ({idIcon, classIcon}) => {
    return (
        <svg className={classIcon} width='100%' height='100%'>
            <use href={spriteSvg + '#' + idIcon}/>
        </svg>
    );
};

export default SvgIcon;