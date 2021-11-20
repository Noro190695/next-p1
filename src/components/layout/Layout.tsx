import React, { FC } from 'react';
import Header from '../header/Header';


const Layout: FC = ({ children }) =>  {
    return (
        <div className='wrapper'>
            <div className="container">
            <Header />
            {children}
            </div>
        </div>
    )
}

export default Layout;