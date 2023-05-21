export const updateProfile = (firstname: string, lastname: string) => {
    cy.getByTestId('EditableProfileCardHeader.EditButton').click();
    cy.getByTestId('ProfileCard.Firstname').clear().type(firstname);
    cy.getByTestId('ProfileCard.Lastname').clear().type(lastname);
    cy.getByTestId('EditableProfileCardHeader.SaveButton').click();
};

export const resetProfile = (profileId: string) => {
    cy.request({
        method: 'PUT',
        url: `http://localhost:8000/profile/${profileId}`,
        headers: { Authorization: 'test' },
        body: {
            id: '4',
            first: 'FirstTest',
            lastname: 'LastTest',
            age: 22,
            currency: 'EUR',
            country: 'Belarus',
            city: 'Minsk',
            username: 'usertest',
            avatar: 'https://oboi-plenka.ru/image/cache/catalog/divino/8/208079259-fotooboi-c1-371-divino-panda-'
                + '3-m-h-2-38-m-1200x800.jpg',
        },
    });
};

declare global {
    namespace Cypress {
        interface Chainable {
            updateProfile(firstname: string, lastname: string): Chainable<void>;
            resetProfile(profileId: string): Chainable<void>;
        }
    }
}
