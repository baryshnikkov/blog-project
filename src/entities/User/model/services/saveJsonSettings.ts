import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { JsonSettings } from '../types/jsonSettings';
import { getJsonSettings } from '../selectors/getJsonSettings/getJsonSettings';
import { setJsonSettingsMutation } from '../../api/userApi';
import { getAuthUserData } from '../selectors/getAuthUserData/getAuthUserData';

export const saveJsonSettings = createAsyncThunk<
    JsonSettings,
    JsonSettings,
    ThunkConfig<string>
>('user/saveJsonSettings', async (newJsonSettings, thunkAPI) => {
    const { rejectWithValue, getState, dispatch } = thunkAPI;
    const userData = getAuthUserData(getState());
    const currentSettings = getJsonSettings(getState());

    if (!userData) {
        return rejectWithValue('Error');
    }

    try {
        const response = await dispatch(
            setJsonSettingsMutation({
                userId: userData.id,
                jsonSettings: {
                    ...currentSettings,
                    ...newJsonSettings,
                },
            }),
        ).unwrap();

        if (!response.jsonSettings) {
            return rejectWithValue('Error');
        }

        return response.jsonSettings;
    } catch (e) {
        console.log(e);
        return rejectWithValue('Error');
    }
});
