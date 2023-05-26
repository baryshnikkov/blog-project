import { DeepPartial } from '@reduxjs/toolkit';
import { ArticleTypes } from '../consts/articleConsts';
import { fetchArticleById } from '../services/fetchArticleById/fetchArticleById';
import { ArticleDetailsSchema } from '../types/article';
import { articleDetailsReducer } from './articleDetailsSlice';

const data = {
    id: '1',
    title: 'title',
    subtitle: 'subtitle',
    img: 'img',
    views: 1,
    createdAt: 'createdAt',
    user: {
        id: '1',
        username: 'admin',
        features: {
            isCounterEnabled: true,
            isArticleRatingEnabled: true,
        },
    },
    type: [ArticleTypes.IT],
    blocks: [],
};

describe('articleDetailsSlice', () => {
    test('fetch article by id pending', () => {
        const state: DeepPartial<ArticleDetailsSchema> = {
            isLoading: false,
            data: undefined,
            error: undefined,
        };

        expect(
            articleDetailsReducer(
                state as ArticleDetailsSchema,
                fetchArticleById.pending,
            ),
        ).toEqual({
            isLoading: true,
            data: undefined,
            error: undefined,
        });
    });

    test('fetch article by id fulfilled', () => {
        const state: DeepPartial<ArticleDetailsSchema> = {
            isLoading: true,
            data: undefined,
            error: undefined,
        };

        expect(
            articleDetailsReducer(
                state as ArticleDetailsSchema,
                fetchArticleById.fulfilled(data, '', '1'),
            ),
        ).toEqual({
            isLoading: false,
            data,
            error: undefined,
        });
    });
});
