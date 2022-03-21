import React from 'react';
import Footer from './Footer';
import Header from './Header';
import style from "../styles/Home.module.css";


function Layout({children}) {
    return ( <div className={style.container}>
        <Header />
        {children}
        <Footer/>
    </div> );
}

export default Layout;