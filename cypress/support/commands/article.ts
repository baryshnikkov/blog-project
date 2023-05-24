import { Article } from '@/entities/Article';

const defaultArticle = {
    title: 'Cypress test',
    subtitle: 'Биология',
    img: 'https://teknotower.com/wp-content/uploads/2020/11/js.png',
    views: 1000,
    createdAt: '01.01.2000',
    userId: '4',
    type: ['SCIENCE'],
    blocks: [],
};

export const createArticle = (article?: Article) =>
    cy
        .request({
            method: 'POST',
            url: 'http://localhost:8000/articles',
            headers: { Authorization: 'test' },
            body: article ?? defaultArticle,
        })
        .then(({ body }) => body);

export const removeArticle = (articleId: string) => {
    cy.request({
        method: 'DELETE',
        url: `http://localhost:8000/articles/${articleId}`,
        headers: { Authorization: 'test' },
    });
};

declare global {
    namespace Cypress {
        interface Chainable {
            createArticle(article?: Article): Chainable<Article>;
            removeArticle(articleId: string): Chainable<void>;
        }
    }
}
