import {ReactElement, ReactNode} from 'react';
import {Navigate} from 'react-router-dom';


type Props = {
    children: ReactNode;
};
export const ProtectedRoute = ({children}: Props): ReactElement => {
    const logged = true
    if (!logged) {
        return <Navigate to={'/error'} />;
    } else {
        return <>{children}</>;
    }


};