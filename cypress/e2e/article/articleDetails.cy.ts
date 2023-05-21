let currentArticleId = '';

describe('Пользователь заходит на страницу статьи ', () => {
    beforeEach(() => {
        cy.login();
        cy.createArticle()
            .then((article) => {
                currentArticleId = article.id;
                cy.visit(`articles/${currentArticleId}`);
            });
    });
    afterEach(() => {
        cy.removeArticle(currentArticleId);
    });
    it('Статья успешно загружается', () => {
        cy.getByTestId('ArticleDetails.Info').should('exist');
    });
    it('Список рекомендаций успешно загружается', () => {
        cy.getByTestId('ArticleRecommendationsList').should('exist');
    });
    it('Пользователь успешно оставляет комментарий', () => {
        cy.getByTestId('ArticleDetails.Info').should('exist');
        cy.getByTestId('AddCommentForm').scrollIntoView();
        cy.addComment('Cypress test');
        cy.getByTestId('CommentCard.Content').should('have.length', 1);
    });
    it('Пользователь ставит оценку статьи', () => {
        cy.getByTestId('ArticleDetails.Info').should('exist');
        cy.getByTestId('RatingCard').scrollIntoView();
        cy.setRate(3, 'feedback');
        cy.get('[data-selected=true]').should('have.length', 3);
    });
    it('Пользователь ставит оценку статьи (пример на фикстурах)', () => {
        cy.intercept('GET', '**/articles/*', { fixture: 'articleDetails.json' });
        cy.getByTestId('ArticleDetails.Info').should('exist');
        cy.getByTestId('RatingCard').scrollIntoView();
        cy.setRate(3, 'feedback');
        cy.get('[data-selected=true]').should('have.length', 3);
    });
});
