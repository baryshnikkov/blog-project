import { StateSchema } from '@/app/providers/StoreProvider';
import { Currency } from '@/entities/Currency';
import { Country } from '@/entities/Country';
import { getProfileForm } from './getProfileForm';

describe('getProfileForm', () => {
    test('should return form', () => {
        const data = {
            first: 'Tom',
            lastname: 'Brown',
            age: 33,
            currency: Currency.RUB,
            country: Country.Russia,
            city: 'Moscow',
            username: 'admin',
        };

        const state: DeepPartial<StateSchema> = {
            profile: {
                form: data,
            },
        };
        expect(getProfileForm(state as StateSchema)).toEqual(data);
    });

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileForm(state as StateSchema)).toEqual(undefined);
    });
});
