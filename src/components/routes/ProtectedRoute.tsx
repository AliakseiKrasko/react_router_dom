import {ReactElement, ReactNode} from 'react';
import {Navigate} from 'react-router-dom';


type Props = {
    children: ReactNode;
};
export const ProtectedRoute = ({children}: Props): ReactElement => {
    const logged = false
    if (!logged) {
        return <Navigate to={'/login'} />;
    } else {
        return <>{children}</>;
    }


};