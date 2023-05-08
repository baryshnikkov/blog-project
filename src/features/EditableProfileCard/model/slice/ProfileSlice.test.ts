import { DeepPartial } from '@reduxjs/toolkit';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { ValidateProfileErrors } from '../consts/editableProfileCardConsts';
import { updateProfileData } from '../services/updateProfileData/updateProfileData';
import { profileReducer, profileActions } from './ProfileSlice';
import { ProfileSchema } from '../types/editableProfileCardSchema';

const data = {
    first: 'Tom',
    lastname: 'Brown',
    age: 33,
    currency: Currency.RUB,
    country: Country.Russia,
    city: 'Moscow',
    username: 'admin',
    avatar: 'https://example.com',
};

describe('profileSlice', () => {
    test('set readonly', () => {
        const state: DeepPartial<ProfileSchema> = {
            readonly: true,
        };

        expect(profileReducer(state as ProfileSchema, profileActions.setReadonly()))
            .toEqual({ readonly: false });
    });

    test('cancel edit', () => {
        const state: DeepPartial<ProfileSchema> = {
            data,
            form: { username: '' },
        };

        expect(profileReducer(state as ProfileSchema, profileActions.cancelEdit()))
            .toEqual({
                readonly: true,
                validateErrors: undefined,
                data,
                form: data,
            });
    });

    test('update profile', () => {
        const state: DeepPartial<ProfileSchema> = {
            form: { username: 'testName1' },
        };

        expect(profileReducer(
                state as ProfileSchema,
                profileActions.updateProfile({ username: 'testName2' }),
        ))
            .toEqual({ form: { username: 'testName2' } });
    });

    test('update profile services pending', () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: false,
            validateErrors: [ValidateProfileErrors.SERVER_ERROR],
        };

        expect(profileReducer(
                state as ProfileSchema,
                updateProfileData.pending,
        ))
            .toEqual({
                isLoading: true,
                validateErrors: undefined,
            });
    });

    test('update profile services fulfilled', () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: true,
            data: {},
            form: {},
            readonly: false,
            validateErrors: [ValidateProfileErrors.SERVER_ERROR],
        };

        expect(profileReducer(
                state as ProfileSchema,
                updateProfileData.fulfilled(data, ''),
        ))
            .toEqual({
                isLoading: false,
                data,
                form: data,
                readonly: true,
                validateErrors: undefined,
            });
    });
});
