import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { ArticleDetails } from 'entities/Article';
import { useParams } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';

const ArticleDetailsPage = memo(() => {
    const { t } = useTranslation('articleDetails');
    const { id } = useParams<{id: string}>();

    if (!id) {
        return (
            <div className={classNames('', {}, [])}>
                {t('Статья не найдена')}
            </div>

        );
    }

    return (
        <div>
            <ArticleDetails id={id} />
        </div>
    );
});

export default ArticleDetailsPage;
