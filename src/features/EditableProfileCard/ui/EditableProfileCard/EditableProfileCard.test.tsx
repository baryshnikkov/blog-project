import userEvent from '@testing-library/user-event';
import { screen } from '@testing-library/react';
import { componentRender } from '@/shared/lib/tests/componentRender/componentRender';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import { Profile } from '@/entities/Profile';
import { $api } from '@/shared/api/api';
import { profileReducer } from '../../model/slice/ProfileSlice';
import { EditableProfileCard } from './EditableProfileCard';

const profile: Profile = {
    id: '1',
    first: 'Name',
    lastname: 'Lastname',
    age: 20,
    username: 'username',
    country: Country.Russia,
    city: 'Moscow',
    currency: Currency.RUB,
    avatar: 'https://test.com/avatar',
};

const options = {
    initialState: {
        profile: {
            data: profile,
            form: profile,
            readonly: true,
            isLoading: false,
        },
        user: {
            authData: {
                id: '1',
                username: 'username',
            },
        },
    },
    asyncReducers: {
        profile: profileReducer,
    },
};

describe('features/EditableProfileCard', () => {
    test('click on EditButton', async () => {
        componentRender(<EditableProfileCard id="1" />, options);

        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditButton'));
        expect(screen.getByTestId('EditableProfileCardHeader.CancelButton')).toBeInTheDocument();
    });

    test('click on CancelButton', async () => {
        componentRender(<EditableProfileCard id="1" />, options);

        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditButton'));

        await userEvent.clear(screen.getByTestId('ProfileCard.Firstname'));
        await userEvent.clear(screen.getByTestId('ProfileCard.Lastname'));

        await userEvent.type(screen.getByTestId('ProfileCard.Firstname'), 'NewFirstname');
        await userEvent.type(screen.getByTestId('ProfileCard.Lastname'), 'NewLastname');

        expect(screen.getByTestId('ProfileCard.Firstname')).toHaveValue('NewFirstname');
        expect(screen.getByTestId('ProfileCard.Lastname')).toHaveValue('NewLastname');

        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.CancelButton'));

        expect(screen.getByTestId('ProfileCard.Firstname')).toHaveValue('Name');
        expect(screen.getByTestId('ProfileCard.Lastname')).toHaveValue('Lastname');
    });

    test('validation error check', async () => {
        componentRender(<EditableProfileCard id="1" />, options);

        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditButton'));
        await userEvent.clear(screen.getByTestId('ProfileCard.Firstname'));
        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.SaveButton'));

        expect(screen.getByTestId('EditableProfileCard.Error.Paragraph')).toBeInTheDocument();
    });

    test('check the sending of the request put', async () => {
        const mockPutReq = jest.spyOn($api, 'put');

        componentRender(<EditableProfileCard id="1" />, options);

        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditButton'));
        await userEvent.clear(screen.getByTestId('ProfileCard.Firstname'));
        await userEvent.type(screen.getByTestId('ProfileCard.Firstname'), 'NewFirstname');
        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.SaveButton'));

        expect(mockPutReq).toHaveBeenCalled();
    });
});
