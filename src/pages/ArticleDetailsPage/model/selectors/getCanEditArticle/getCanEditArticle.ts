import { createSelector } from '@reduxjs/toolkit';
import { getAuthUserData } from 'entities/User';
import { getArticleDetailsData } from 'entities/Article';

export const getCanEditArticle = createSelector(
    getAuthUserData,
    getArticleDetailsData,
    (user, article) => {
        if (!user || !article) {
            return false;
        }

        return user.id === article.user.id;
    },
);
