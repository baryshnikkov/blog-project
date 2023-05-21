import { getByTestId } from './commands/getByTestId';
import { login } from './commands/login';
import { resetProfile, updateProfile } from './commands/profile';
import { createArticle, removeArticle } from './commands/article';
import { addComment } from './commands/comments';
import { setRate } from './commands/rating';

Cypress.Commands.add('login', login);
Cypress.Commands.add('getByTestId', getByTestId);
Cypress.Commands.add('updateProfile', updateProfile);
Cypress.Commands.add('resetProfile', resetProfile);
Cypress.Commands.add('createArticle', createArticle);
Cypress.Commands.add('removeArticle', removeArticle);
Cypress.Commands.add('addComment', addComment);
Cypress.Commands.add('setRate', setRate);
