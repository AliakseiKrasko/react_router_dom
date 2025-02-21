import {createBrowserRouter, Navigate, Outlet} from 'react-router-dom';
import {Error404} from '../pages/Error404';
import App from '../../App';
import {ADIDAS} from '../pages/ADIDAS';
import {PUMA} from '../pages/PUMA';
import {NIKE} from '../pages/NIKE';
import {Prices} from '../pages/Prices';
import {Model} from '../pages/Model';
import {ProtectedPage} from '../pages/ProtectedPage';
import {ProtectedRoute} from './ProtectedRoute';
import {Login} from '../pages/Login';
import {ReactElement} from 'react';

const PATH = {
    ADIDAS: '/adidas',
    PUMA: '/puma',
    NIKE: '/nike',
    PRICES: '/wholesale-prices',
    MODEL: '/:brand/:id',
    PROTECTEDPAGE: '/protectedpage',
    ERROR: '/error',
    LOGIN: '/login',
    ALL:'*',
    START: '/'
} as const;


export const publicRoutes = [
    {
        path: PATH.ADIDAS,
        element: <ADIDAS/>,
    },
    {
        path: PATH.PUMA,
        element: <PUMA/>,
    },
    {
        path: PATH.NIKE,
        element: <NIKE/>,
    },
    {
        path: PATH.PRICES,
        element: <Prices/>,
    },
    {
        path: PATH.MODEL,
        element: <Model/>,
    },
    {
        path: PATH.LOGIN,
        element: <Login/>,
    },
    {
        path: PATH.ALL,
        element: <Error404 />
    },
    {
        path: PATH.START,
        element: <ADIDAS />
    }


];

export const privateRoutes = [
    {
        path: PATH.PROTECTEDPAGE,
        element: <ProtectedPage/>
    },
];

export const PrivateRoutes = () => {
    const isAuth = true
    return isAuth ? <Outlet /> : <Navigate to={'/login'} />
};

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        errorElement: <Navigate to={PATH.ERROR}/>,
        children: [
            {
                element: <PrivateRoutes />,
                children: privateRoutes
            },
            ...publicRoutes
        ],
    },
]);