import { createSelector } from '@reduxjs/toolkit';
import { UserRoles } from '../../consts/userConsts';
import { getUserRoles } from '../getUserRoles/getUserRoles';

export const isUserManager = createSelector(getUserRoles, (roles) => roles?.includes(UserRoles.MANAGER));
