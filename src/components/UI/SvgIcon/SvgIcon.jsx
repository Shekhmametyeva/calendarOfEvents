import React from 'react';
import spriteSvg from "../../../assets/icon/sprite.svg";

const SvgIcon = ({idIcon, classIcon}) => {
    const hrefIcon = `${spriteSvg}#${idIcon}`;
    return (
        <svg className={classIcon}>
            <use href={hrefIcon}/>
        </svg>
    );
};

export default SvgIcon;