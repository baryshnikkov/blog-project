import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { ArticleList } from 'entities/Article';
import { DynamicModuleLoader, ReducerList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useSelector } from 'react-redux';
import { Page } from 'widgets/Page/Page';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { useSearchParams } from 'react-router-dom';
import { initArticlesPage } from '../../model/services/initArticlesPage/initArticlesPage';
import cls from './ArticlesPage.module.scss';
import { articlesPageReducer, getArticles } from '../../model/slices/articlesPageSlice';
import { getArticlesPageIsLoading } from '../../model/selectors/getArticlesPageIsLoading/getArticlesPageIsLoading';
import { getArticlesPageView } from '../../model/selectors/getArticlesPageView/getArticlesPageView';
import { fetchNextArticlesPage } from '../../model/services/fetchNextArticlesPage/fetchNextArticlesPage';
import { getArticlesPageError } from '../../model/selectors/getArticlesPageError/getArticlesPageError';
import { ArticlesPageFilters } from '../ArticlesPageFilters/ArticlesPageFilters';

const initialReducers: ReducerList = {
    articlesPage: articlesPageReducer,
};

const ArticlesPage = memo(() => {
    const { t } = useTranslation('articles');
    const dispatch = useAppDispatch();
    const articles = useSelector(getArticles.selectAll);
    const isLoading = useSelector(getArticlesPageIsLoading);
    const error = useSelector(getArticlesPageError);
    const view = useSelector(getArticlesPageView);
    const [searchParams] = useSearchParams();

    const onLoadNextPart = useCallback(() => {
        dispatch(fetchNextArticlesPage());
    }, [dispatch]);

    useInitialEffect(() => {
        dispatch(initArticlesPage(searchParams));
    });

    if (error) {
        return (
            <div className={cls.error}>
                <Text
                    title={t('Не получилось получить данные с сервера')}
                    theme={TextTheme.ERROR}
                />
            </div>
        );
    }

    return (
        <DynamicModuleLoader
            reducers={initialReducers}
            removeAfterUnmount={false}
        >
            <Page
                className={cls.ArticlesPage}
                onScrollEnd={onLoadNextPart}
            >
                <ArticlesPageFilters />
                <ArticleList
                    className={cls.list}
                    articles={articles}
                    view={view}
                    isLoading={isLoading}
                />

            </Page>
        </DynamicModuleLoader>
    );
});

export default ArticlesPage;
