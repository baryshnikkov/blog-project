import type { ArticleDetailsPageSchema } from './model/types';
import type { ArticleDetailsCommentsSchema } from './model/types/ArticleDetailsCommentsSchema';
import type { ArticleDetailsRecommendationsSchema } from './model/types/ArticleDetailsRecommendationsSchema';
import { ArticleDetailsPageAsync as ArticleDetailsPage } from './ui/ArticleDetailsPage/ArticleDetailsPage.async';

export {
    ArticleDetailsPage,
};

export type {
    ArticleDetailsCommentsSchema,
    ArticleDetailsRecommendationsSchema,
    ArticleDetailsPageSchema,
};
