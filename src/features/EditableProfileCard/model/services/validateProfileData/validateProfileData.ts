import { Profile } from 'entities/Profile';
import { ValidateProfileErrors } from '../../types/editableProfileCardSchema';

export const validateProfileData = (profile?: Profile) => {
    if (!profile) {
        return [ValidateProfileErrors.NO_DATA];
    }

    const {
        first,
        lastname,
        age,
        country,
        city,
        currency,
        avatar,
        username,
    } = profile;

    const errors: ValidateProfileErrors[] = [];

    if (!first) {
        errors.push(ValidateProfileErrors.INCORRECT_FIRST);
    }

    if (!lastname) {
        errors.push(ValidateProfileErrors.INCORRECT_LASTNAME);
    }

    if (!age || !Number.isInteger(age)) {
        errors.push(ValidateProfileErrors.INCORRECT_AGE);
    }

    if (!country) {
        errors.push(ValidateProfileErrors.INCORRECT_COUNTRY);
    }

    if (!city) {
        errors.push(ValidateProfileErrors.INCORRECT_CITY);
    }

    if (!currency) {
        errors.push(ValidateProfileErrors.INCORRECT_CURRENCY);
    }

    if (!avatar) {
        errors.push(ValidateProfileErrors.INCORRECT_AVATAR);
    }

    if (!username) {
        errors.push(ValidateProfileErrors.INCORRECT_USERNAME);
    }

    return errors;
};
