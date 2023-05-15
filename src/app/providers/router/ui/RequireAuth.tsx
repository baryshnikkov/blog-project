import { Navigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useMemo } from 'react';
import { getAuthUserData, getUserRoles, UserRoles } from '@/entities/User';
import { RoutePath } from '@/shared/const/router';

interface RequireAuthProps {
    children: JSX.Element;
    roles?: UserRoles[];
}

export const RequireAuth = (props: RequireAuthProps) => {
    const {
        children,
        roles,
    } = props;

    const auth = useSelector(getAuthUserData);
    const location = useLocation();
    const userRoles = useSelector(getUserRoles);

    const hasRequiredRoles = useMemo(() => {
        if (!roles) {
            return true;
        }

        return roles.some((requiredRole) => {
            const hasRole = userRoles?.includes(requiredRole);
            return hasRole;
        });
    }, [roles, userRoles]);

    if (!auth) {
        return <Navigate to={RoutePath.main} state={{ from: location }} replace />;
    }

    if (!hasRequiredRoles) {
        return <Navigate to={RoutePath.forbidden} state={{ from: location }} replace />;
    }

    return children;
};