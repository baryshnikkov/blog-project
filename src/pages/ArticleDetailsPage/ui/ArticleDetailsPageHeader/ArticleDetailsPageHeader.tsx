import { classNames } from '@/shared/lib/classNames/classNames';
import { memo, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { RoutePath } from '@/shared/config/routeConfig/routeConfig';
import { Button } from '@/shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { AppLink } from '@/shared/ui/AppLink/AppLink';
import { getArticleDetailsData } from '@/entities/Article';
import { HStack } from '@/shared/ui/Stack';
import { getCanEditArticle } from '../../model/selectors/getCanEditArticle/getCanEditArticle';

interface ArticleDetailsPageHeaderProps {
    className?: string
}

export const ArticleDetailsPageHeader = memo((props: ArticleDetailsPageHeaderProps) => {
    const {
        className,
    } = props;
    const { t } = useTranslation('articleDetails');
    const navigate = useNavigate();
    const canEdit = useSelector(getCanEditArticle);
    const article = useSelector(getArticleDetailsData);

    const onBackToList = useCallback(() => {
        navigate(RoutePath.articles);
    }, [navigate]);

    return (
        <HStack
            className={classNames('', {}, [className])}
            justify="between"
        >
            <Button onClick={onBackToList}>
                {t('Назад к списку')}
            </Button>
            {canEdit && (
                <AppLink
                    to={`${RoutePath.article_details}${article?.id}/edit`}
                >
                    <Button>
                        {t('Редактировать')}
                    </Button>
                </AppLink>
            )}
        </HStack>
    );
});
