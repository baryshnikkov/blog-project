import { StateSchema } from 'app/providers/StoreProvider';
import { ArticleTypes } from 'entities/Article';

export const getArticlesPageType = (state: StateSchema) => state.articlesPage?.type ?? ArticleTypes.ALL;
