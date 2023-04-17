import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { ArticleList } from 'entities/Article';
import cls from './ArticlesPage.module.scss';

const ArticlesPage = memo(() => {
    const { t } = useTranslation('articles');

    return (
        <div className={cls.ArticlesPage}>
            <ArticleList
                articles={[]}
            />
        </div>
    );
});

export default ArticlesPage;
