import { Navigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getAuthUserData } from 'entities/User';
import { RoutePath } from './routeConfig';

interface RequireAuthProps {
    children: JSX.Element;
}

export const RequireAuth = (props: RequireAuthProps) => {
    const {
        children,
    } = props;

    const auth = useSelector(getAuthUserData);
    const location = useLocation();

    if (!auth) {
        return <Navigate to={RoutePath.main} state={{ from: location }} replace />;
    }

    return children;
};
