import { StateSchema } from '@/app/providers/StoreProvider';
import { ValidateProfileErrors } from '../../consts/editableProfileCardConsts';
import { getProfileValidateErrors } from './getProfileValidateErrors';

describe('getProfileValidateErrors', () => {
    test('should return validate 10 errors', () => {
        const errors = [
            ValidateProfileErrors.SERVER_ERROR,
            ValidateProfileErrors.NO_DATA,
            ValidateProfileErrors.INCORRECT_CITY,
            ValidateProfileErrors.INCORRECT_COUNTRY,
            ValidateProfileErrors.INCORRECT_CURRENCY,
            ValidateProfileErrors.INCORRECT_USERNAME,
            ValidateProfileErrors.INCORRECT_FIRST,
            ValidateProfileErrors.INCORRECT_LASTNAME,
            ValidateProfileErrors.INCORRECT_AVATAR,
            ValidateProfileErrors.INCORRECT_AGE,
        ];

        const state: DeepPartial<StateSchema> = {
            profile: {
                validateErrors: errors,
            },
        };
        expect(getProfileValidateErrors(state as StateSchema)).toEqual(errors);
    });

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileValidateErrors(state as StateSchema)).toEqual(
            undefined,
        );
    });
});
