import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginError } from './getLoginError';

describe('getLoginError', () => {
    test('should return errorText', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                error: 'errorText',
            },
        };
        expect(getLoginError(state as StateSchema)).toEqual('errorText');
    });

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getLoginError(state as StateSchema)).toEqual(undefined);
    });
});
