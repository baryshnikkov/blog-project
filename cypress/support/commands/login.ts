import { USER_LOCALSTORAGE_KEY } from '@/shared/const/localstorage';
import { User } from '@/entities/User';

export const login = (
    username: string = 'usertest',
    password: string = 'usertest',
) =>
    cy
        .request({
            method: 'POST',
            url: 'http://localhost:8000/login',
            body: {
                username,
                password,
            },
        })
        .then(({ body }) => {
            window.localStorage.setItem(
                USER_LOCALSTORAGE_KEY,
                JSON.stringify(body),
            );
            return body;
        });

declare global {
    namespace Cypress {
        interface Chainable {
            login(username?: string, password?: string): Chainable<User>;
        }
    }
}
