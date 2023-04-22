import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { ArticleDetails, ArticleList } from 'entities/Article';
import { useParams } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import { CommentList } from 'entities/Comment';
import { Text, TextSize } from 'shared/ui/Text/Text';
import { DynamicModuleLoader, ReducerList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useSelector } from 'react-redux';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { AddCommentForm } from 'features/AddCommentForm';
import { Page } from 'widgets/Page/Page';
import {
    fetchArticleRecommendations,
} from '../../model/services/fetchArticleRecommendation/fetchArticleRecommendation';
import {
    getArticleRecommendationsIsLoading,
} from '../../model/selectors/getArticleRecommendationsIsLoading/getArticleRecommendationsIsLoading';
import { addCommentForArticle } from '../../model/services/addCommentForArticle/addCommentForArticle';
import { fetchCommentsByArticleId } from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import {
    getArticleCommentsIsLoading,
} from '../../model/selectors/getArticleCommentsIsLoading/getArticleCommentsIsLoading';
import { getArticleComments } from '../../model/slices/articleDetailsCommentsSlice';
import cls from './ArticleDetailsPage.module.scss';
import { getArticleRecommendations } from '../../model/slices/articleDetailsRecommendationsSlice';
import { articleDetailsPageReducer } from '../../model/slices';
import { ArticleDetailsPageHeader } from '../ArticleDetailsPageHeader/ArticleDetailsPageHeader';

const initialReducers: ReducerList = {
    articleDetailsPage: articleDetailsPageReducer,
};

const ArticleDetailsPage = memo(() => {
    const { t } = useTranslation('articleDetails');
    const { id } = useParams<{id: string}>();
    const dispatch = useAppDispatch();
    const comments = useSelector(getArticleComments.selectAll);
    const recommendations = useSelector(getArticleRecommendations.selectAll);
    const commentsIsLoading = useSelector(getArticleCommentsIsLoading);
    const recommendationsIsLoading = useSelector(getArticleRecommendationsIsLoading);

    const onSendComment = useCallback((text: string) => {
        dispatch(addCommentForArticle(text));
    }, [dispatch]);

    useInitialEffect(() => {
        dispatch(fetchCommentsByArticleId(id));
        dispatch(fetchArticleRecommendations());
    });

    if (!id) {
        return (
            <Page className={classNames('', {}, [])}>
                {t('Статья не найдена')}
            </Page>

        );
    }

    return (
        <DynamicModuleLoader
            reducers={initialReducers}
            removeAfterUnmount
        >
            <Page className={classNames('ArticleDetailsPage', {}, [])}>
                <ArticleDetailsPageHeader />
                <ArticleDetails id={id} />
                <Text
                    className={cls.commentTitle}
                    size={TextSize.L}
                    title={t('Рекомендуем')}
                />
                <ArticleList
                    className={cls.recommendations}
                    articles={recommendations}
                    isLoading={recommendationsIsLoading}
                    target="_blank"
                />
                <Text
                    className={cls.commentTitle}
                    size={TextSize.L}
                    title={t('Комментарии')}
                />
                <AddCommentForm
                    onSendComment={onSendComment}
                />
                <CommentList
                    comments={comments}
                    isLoading={commentsIsLoading}
                />
            </Page>
        </DynamicModuleLoader>
    );
});

export default ArticleDetailsPage;
