import React, { FC } from 'react';
import { Logo } from '../../icons/Logo';
import headerStyle from './header.module.scss';
const Header: FC = () => {
    return (
        <header className={headerStyle.header}>
            <div className={headerStyle.top__content}>
                <Logo /> 
                <p>штрафов <span>нет</span></p>
            </div>
         </header>         
    )
}


export default Header;