import { memo } from 'react';
import { useTranslation } from 'react-i18next';

const ArticleDetailsPage = memo(() => {
    const { t } = useTranslation('articleDetails');

    return (
        <div>
            {t('Страница сведений о статье')}
        </div>
    );
});

export default ArticleDetailsPage;
