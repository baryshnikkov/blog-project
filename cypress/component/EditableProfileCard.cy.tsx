import { EditableProfileCard } from '@/features/EditableProfileCard';
import { TestProvider } from '@/shared/lib/tests/componentRender/componentRender';

const USER_ID = '4';

describe('EditableProfileCard.cy.tsx', () => {
    it('playground', () => {
        cy.intercept('GET', '**/profile/*', { fixture: 'profile.json' });
        cy.mount(
            <TestProvider
                options={{
                    initialState: {
                        user: {
                            authData: {
                                id: USER_ID,
                            },
                        },
                    },
                }}
            >
                <EditableProfileCard id={USER_ID} />
            </TestProvider>,
        );
        cy.getByTestId('ProfileCard.Firstname').should('have.value', 'FirstTest');
        cy.getByTestId('EditableProfileCardHeader.EditButton').click();
        cy.getByTestId('EditableProfileCardHeader.CancelButton').should('exist');
        cy.getByTestId('ProfileCard.Firstname').clear().type('NewFirstname');
        cy.getByTestId('ProfileCard.Lastname').clear().type('NewLastname');
        cy.getByTestId('EditableProfileCardHeader.CancelButton').click();
        cy.getByTestId('ProfileCard.Firstname').should('have.value', 'FirstTest');
        cy.getByTestId('ProfileCard.Lastname').should('have.value', 'LastTest');
    });
});
