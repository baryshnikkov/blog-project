import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { getArticlesPageIsLoading } from '../../selectors/getArticlesPageIsLoading/getArticlesPageIsLoading';
import { getArticlesPageHasMore } from '../../selectors/getArticlesPageHasMore/getArticlesPageHasMore';
import { getArticlesPageNum } from '../../selectors/getArticlesPageNum/getArticlesPageNum';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';
import { articlesPageActions } from '../../slices/articlesPageSlice';

export const fetchNextArticlesPage = createAsyncThunk<void, void, ThunkConfig<string>>(
    'articlesPage/fetchNextArticlesPage',
    async (_, thunkAPI) => {
        const { getState, dispatch } = thunkAPI;
        const hasMore = getArticlesPageHasMore(getState());
        const page = getArticlesPageNum(getState());
        const isLoading = getArticlesPageIsLoading(getState());

        if (hasMore && !isLoading) {
            dispatch(fetchArticlesList({}));
            dispatch(articlesPageActions.setPage(page + 1));
        }
    },
);
