import { getAuthUserData } from './model/selectors/getAuthUserData/getAuthUserData';
import { getUserInited } from './model/selectors/getUserInited/getUserInited';
import { userActions, userReducer } from './model/slice/userSlice';
import { User, UserSchema } from './model/types/userSchema';

export {
    userReducer,
    userActions,
    UserSchema,
    User,
    getAuthUserData,
    getUserInited,
};
