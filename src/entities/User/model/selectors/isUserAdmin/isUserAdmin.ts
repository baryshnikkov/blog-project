import { createSelector } from '@reduxjs/toolkit';
import { UserRoles } from '../../consts/userConsts';
import { getUserRoles } from '../getUserRoles/getUserRoles';

export const isUserAdmin = createSelector(getUserRoles, (roles) => roles?.includes(UserRoles.ADMIN));
