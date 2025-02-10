import {createBrowserRouter} from 'react-router-dom';
import {Error404} from '../pages/Error404';
import App from '../../App';
import {ADIDAS} from '../pages/ADIDAS';
import {PUMA} from '../pages/PUMA';
import {NIKE} from '../pages/NIKE';
import {Prices} from '../pages/Prices';
import {Model} from '../pages/Model';
import {ProtectedPage} from '../pages/ProtectedPage';
import {ProtectedRoute} from './ProtectedRoute';

const PATH = {
    ADIDAS: '/adidas',
    PUMA: '/puma',
    NIKE: '/nike',
    PRICES: '/wholesale-prices',
    MODEL: '/:brand/:id',
    PROTECTEDPAGE: '/protectedpage',
    ERROR: '/error',
} as const;

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        errorElement: <Error404/>,
        children: [
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
                path: PATH.PROTECTEDPAGE,
                element:
                    <ProtectedRoute>
                        <ProtectedPage/>
                    </ProtectedRoute>
            },
            {
                path: PATH.ERROR,
                element: <Error404/>,
            },
            {
                path: '*', element: <Error404/>
            },
        ],
    },
]);