import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { validateProfileData } from './validateProfileData';
import { ValidateProfileErrors } from '../../types/editableProfileCardSchema';

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

describe('validateProfileData', () => {
    test('success', async () => {
        const result = validateProfileData(data);

        expect(result).toEqual([]);
    });

    test('without first and last name', async () => {
        const result = validateProfileData({ ...data, first: '', lastname: '' });

        expect(result).toEqual([
            ValidateProfileErrors.INCORRECT_FIRST,
            ValidateProfileErrors.INCORRECT_LASTNAME,
        ]);
    });

    test('incorrect age', async () => {
        const result = validateProfileData({ ...data, age: undefined });

        expect(result).toEqual([
            ValidateProfileErrors.INCORRECT_AGE,
        ]);
    });

    test('incorrect country', async () => {
        const result = validateProfileData({ ...data, country: undefined });

        expect(result).toEqual([
            ValidateProfileErrors.INCORRECT_COUNTRY,
        ]);
    });

    test('incorrect all', async () => {
        const result = validateProfileData({});

        expect(result).toEqual([
            ValidateProfileErrors.INCORRECT_FIRST,
            ValidateProfileErrors.INCORRECT_LASTNAME,
            ValidateProfileErrors.INCORRECT_AGE,
            ValidateProfileErrors.INCORRECT_COUNTRY,
            ValidateProfileErrors.INCORRECT_CITY,
            ValidateProfileErrors.INCORRECT_CURRENCY,
            ValidateProfileErrors.INCORRECT_AVATAR,
            ValidateProfileErrors.INCORRECT_USERNAME,
        ]);
    });
});
