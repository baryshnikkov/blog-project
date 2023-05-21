describe('Роутинг', () => {
    describe('Пользователь НЕ авторизован', () => {
        it('Переход на главную страницу', () => {
            cy.visit('/');
            cy.getByTestId('MainPage').should('exist');
        });
        it('Редирект на главную страницу при попытке зайти на страницу профиля', () => {
            cy.visit('/profile/1');
            cy.getByTestId('MainPage').should('exist');
        });
        it('Переход по несуществующему маршруту', () => {
            cy.visit('/not-found-page');
            cy.getByTestId('NotFoundPage').should('exist');
        });
    });
    describe('Пользователь авторизован', () => {
        it('Переход на страницу профиля', () => {
            cy.login('usertest', 'usertest');
            cy.visit('/profile/1');
            cy.getByTestId('ProfilePage').should('exist');
        });
        it('Переход на страницу со списком статей', () => {
            cy.login('usertest', 'usertest');
            cy.visit('/articles');
            cy.getByTestId('ArticlesPage').should('exist');
        });
    });
});
