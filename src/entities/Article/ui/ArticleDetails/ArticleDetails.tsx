import { classNames } from 'shared/lib/classNames/classNames';
import { DynamicModuleLoader, ReducerList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { memo, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { getArticleDetailsData } from '../../model/selectors/getArticleDetailsData/getArticleDetailsData';
import { getArticleDetailsError } from '../../model/selectors/getArticleDetailsError/getArticleDetailsError';
import {
    getArticleDetailsIsLoading,
} from '../../model/selectors/getArticleDetailsIsLoading/getArticleDetailsIsLoading';
import cls from './ArticleDetails.module.scss';
import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice';
import { fetchArticleById } from '../../model/services/fetchArticleById/fetchArticleById';

interface ArticleDetailsProps {
    className?: string;
    id: string;
}

const initialReducers: ReducerList = {
    articleDetails: articleDetailsReducer,
};

export const ArticleDetails = memo((props: ArticleDetailsProps) => {
    const {
        className,
        id,
    } = props;
    const { t } = useTranslation('articleDetails');
    const dispatch = useAppDispatch();
    const article = useSelector(getArticleDetailsData);
    const error = useSelector(getArticleDetailsError);
    // const isLoading = useSelector(getArticleDetailsIsLoading);
    const isLoading = true;

    useEffect(() => {
        dispatch(fetchArticleById(id));
    }, [dispatch, id]);

    let content;

    if (isLoading) {
        content = (
            <div>
                <Skeleton className={cls.avatar} width={200} height={200} border="50%" />
                <Skeleton className={cls.title} width={300} height={32} />
                <Skeleton className={cls.title} width={600} height={24} />
                <Skeleton className={cls.title} width="100%" height={200} />
                <Skeleton className={cls.title} width="100%" height={200} />
            </div>
        );
    }

    if (error) {
        content = (
            <Text
                align={TextAlign.CENTER}
                theme={TextTheme.ERROR}
                title={t('Произошла ошибка при загрузке статьи.')}
            />
        );
    }

    if (!isLoading && !error) {
        content = (
            <div>
                good
            </div>
        );
    }

    return (
        <DynamicModuleLoader
            reducers={initialReducers}
            removeAfterUnmount
        >
            <div className={classNames(cls.ArticleDetails, {}, [className])}>
                {content}
            </div>
        </DynamicModuleLoader>
    );
});
