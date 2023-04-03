import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';

export enum ValidateProfileErrors {
    INCORRECT_FIRST = 'INCORRECT_FIRST',
    INCORRECT_LASTNAME = 'INCORRECT_LASTNAME',
    INCORRECT_AGE = 'INCORRECT_AGE',
    INCORRECT_CURRENCY = 'INCORRECT_CURRENCY',
    INCORRECT_COUNTRY = 'INCORRECT_COUNTRY',
    INCORRECT_CITY = 'INCORRECT_CITY',
    INCORRECT_USERNAME = 'INCORRECT_USERNAME',
    INCORRECT_AVATAR = 'INCORRECT_AVATAR',
    NO_DATA = 'NO_DATA',
    SERVER_ERROR = 'SERVER_ERROR',
}

export interface Profile {
    'first'?: string;
    'lastname'?: string;
    'age'?: number;
    'currency'?: Currency;
    'country'?: Country;
    'city'?: string;
    'username'?: string;
    'avatar'?: string;
}

export interface ProfileSchema {
    data?: Profile;
    form?: Profile;
    isLoading: boolean;
    error?: string;
    readonly: boolean;
    validateErrors?: ValidateProfileErrors[];
}
