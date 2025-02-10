import React from 'react';
import {NavLink, Outlet} from 'react-router-dom';
import styles from "./components/Site.module.css";
import {S} from './components/pages/_styles';

const PATH = {
    ADIDAS: '/adidas',
    PUMA: '/puma',
    NIKE: '/nike',
    PRICES: '/wholesale-prices',
    PROTECTEDPAGE: '/protectedpade',
} as const;

function App() {
    return <><div className={styles.header}>
        <h1>HEADER</h1>
    </div>
        <div className={styles.body}>
        <div className={styles.nav}>
            <S.NavWrapper><NavLink to={PATH.ADIDAS}>Adidas</NavLink></S.NavWrapper>
            <S.NavWrapper><NavLink to={PATH.PUMA}>Puma</NavLink></S.NavWrapper>
            <S.NavWrapper><NavLink to={PATH.NIKE}>Nike</NavLink></S.NavWrapper>
            <S.NavWrapper><NavLink to={PATH.PRICES}>Price</NavLink></S.NavWrapper>
            <S.NavWrapper><NavLink to={PATH.PROTECTEDPAGE}>ProtectedPage</NavLink></S.NavWrapper>
        </div>
            <div className={styles.content}>
                <Outlet />
            </div>
        </div>
        <div className={styles.footer}>Colection 2025
        </div>
    </>;
}


export default App;