import { createSelector } from '@reduxjs/toolkit';
import { getUserRoles } from '../getUserRoles/getUserRoles';
import { UserRoles } from '../../types/userSchema';

export const isUserManager = createSelector(getUserRoles, (roles) => roles?.includes(UserRoles.MANAGER));
