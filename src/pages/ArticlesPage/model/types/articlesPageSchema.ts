import { EntityState } from '@reduxjs/toolkit';
import {
    Article,
    ArticleSortField,
    ArticleTypes,
    ArticleView,
} from '@/entities/Article';
import { SortOrder } from '@/shared/types/sort';

export interface ArticlesPageSchema extends EntityState<Article> {
    isLoading?: boolean;
    error?: string;
    view: ArticleView;

    // pagination
    page: number;
    limit: number;
    hasMore: boolean;

    // filters
    order: SortOrder;
    sort: ArticleSortField,
    search: string,
    type: ArticleTypes,

    _inited: boolean;
}
