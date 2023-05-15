import { RouteProps } from 'react-router-dom';
// eslint-disable-next-line mb/layer-imports
import { UserRoles } from '@/entities/User';

export type AppRoutesProps = RouteProps & {
    authOnly?: boolean;
    roles?: UserRoles[];
}
