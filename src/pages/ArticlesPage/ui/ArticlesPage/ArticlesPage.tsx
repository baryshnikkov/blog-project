import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import cls from './ArticlesPage.module.scss';

const ArticlesPage = memo(() => {
    const { t } = useTranslation('articles');

    return (
        <div className={cls.ArticlesPage}>
            {t('Страница статей')}
        </div>
    );
});

export default ArticlesPage;
