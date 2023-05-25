import { UserRoles } from './model/consts/userConsts';
import { getAuthUserData } from './model/selectors/getAuthUserData/getAuthUserData';
import { useJsonSettings } from './model/selectors/getJsonSettings/getJsonSettings';
import { getUserInited } from './model/selectors/getUserInited/getUserInited';
import { getUserRoles } from './model/selectors/getUserRoles/getUserRoles';
import { isUserAdmin } from './model/selectors/isUserAdmin/isUserAdmin';
import { isUserManager } from './model/selectors/isUserManager/isUserManager';
import { saveJsonSettings } from './model/services/saveJsonSettings';
import { userActions, userReducer } from './model/slice/userSlice';
import type { User, UserSchema } from './model/types/userSchema';

export {
    userReducer,
    userActions,
    getAuthUserData,
    getUserInited,
    isUserAdmin,
    isUserManager,
    UserRoles,
    getUserRoles,
    saveJsonSettings,
    useJsonSettings,
};

export type { UserSchema, User };
