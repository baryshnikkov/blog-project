import { getAuthUserData } from './model/selectors/getAuthUserData/getAuthUserData';
import { userActions, userReducer } from './model/slice/userSlice';
import { User, UserSchema } from './model/types/userSchema';

export {
    userReducer,
    userActions,
    UserSchema,
    User,
    getAuthUserData,
};
