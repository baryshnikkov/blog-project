let profileId = '';

describe('Пользователь заходит на страницу профиля', () => {
    beforeEach(() => {
        cy.login()
            .then((data) => {
                profileId = data.id;
                cy.visit(`/profile/${profileId}`);
            });
    });
    afterEach(() => {
        cy.resetProfile(profileId);
    });
    it('Профиль успешно загружается', () => {
        cy.getByTestId('ProfileCard.Firstname').should('have.value', 'FirstTest');
    });
    it('Редактирование профиля', () => {
        cy.updateProfile('NewFirstTest', 'NewLastTest');
        cy.getByTestId('ProfileCard.Firstname').should('have.value', 'NewFirstTest');
        cy.getByTestId('ProfileCard.Lastname').should('have.value', 'NewLastTest');
    });
});
