import React, { FC } from 'react';
import { Logo } from '../../icons/Logo';
import headerStyle from './header.module.scss';
import Link from 'next/link';
const Header: FC = () => {
    return (
        <header className={headerStyle.header}>
            <Link href='/'>
                <a>
                    <div className={headerStyle.top__content}>
                        <Logo /> 
                        <p>штрафов <span>нет</span></p>
                    </div>
                </a>
            </Link>
         </header>         
    )
}


export default Header;