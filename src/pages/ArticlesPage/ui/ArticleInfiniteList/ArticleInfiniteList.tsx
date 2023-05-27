import { memo } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { ArticleList } from '@/entities/Article';
import { Text, TextTheme } from '@/shared/ui/deprecated/Text';
import { getArticlesPageError } from '../../model/selectors/getArticlesPageError/getArticlesPageError';
import { getArticles } from '../../model/slices/articlesPageSlice';
import { getArticlesPageIsLoading } from '../../model/selectors/getArticlesPageIsLoading/getArticlesPageIsLoading';
import { getArticlesPageView } from '../../model/selectors/getArticlesPageView/getArticlesPageView';

interface ArticleInfiniteListProps {
    className?: string;
}

export const ArticleInfiniteList = memo((props: ArticleInfiniteListProps) => {
    const { className } = props;
    const { t } = useTranslation('articles');
    const articles = useSelector(getArticles.selectAll);
    const error = useSelector(getArticlesPageError);
    const isLoading = useSelector(getArticlesPageIsLoading);
    const view = useSelector(getArticlesPageView);

    if (error) {
        return (
            <Text
                title={t('Не получилось получить данные с сервера')}
                theme={TextTheme.ERROR}
            />
        );
    }

    return (
        <ArticleList
            className={className}
            articles={articles}
            view={view}
            isLoading={isLoading}
        />
    );
});
