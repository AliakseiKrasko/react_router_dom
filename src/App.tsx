import React from 'react';
import {Navigate, NavLink, Route, Routes} from 'react-router-dom';
import {Error404} from "./components/pages/Error404";
import {ADIDAS} from "./components/pages/ADIDAS";
import {PUMA} from "./components/pages/PUMA";
import {NIKE} from "./components/pages/NIKE";
import styles from "./components/Site.module.css";
import {S} from './components/pages/_styles';
import {Model} from './components/pages/Model';

const PATH = {
    PAGE1: '/ADIDAS',
    PAGE2: '/PUMA',
    PAGE3: '/NIKE',
} as const;

function App() {
    return (
        <div>
            <div className={styles.header}><h1>HEADER</h1></div>
            <div className={styles.body}>
                <div className={styles.nav}>
                    <S.NavWrapper><NavLink to={PATH.PAGE1}>ADIDAS</NavLink></S.NavWrapper>
                    <S.NavWrapper><NavLink to={PATH.PAGE2}>PUMA</NavLink></S.NavWrapper>
                    <S.NavWrapper><NavLink to={PATH.PAGE3}>NIKE</NavLink></S.NavWrapper>
                    {/*<a href="page3">ERROR</a>*/}
                </div>
                <div className={styles.content}>
                    <Routes>
                        <Route path={'/'} element={<Navigate to={'/page1'}/>}/>
                        <Route path={'/adidas/model'} element={<Model/>}/>
                        <Route path={PATH.PAGE1} element={<ADIDAS/>}/>
                        <Route path={PATH.PAGE2} element={<PUMA/>}/>
                        <Route path={PATH.PAGE3} element={<NIKE/>}/>

                        <Route path={'/*'} element={<Error404/>}/>
                    </Routes>
                </div>
            </div>
            <div className={styles.footer}>abibas 2023</div>
        </div>
    );
}

export default App;