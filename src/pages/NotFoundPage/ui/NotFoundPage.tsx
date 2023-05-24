import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page';
import cls from './NotFoundPage.module.scss';

const NotFoundPage = memo(() => {
    const { t } = useTranslation('notFoundPage');

    return (
        <Page className={cls.NotFoundPage} data-testid="NotFoundPage">
            {t('Страница не найдена')}
        </Page>
    );
});

export default NotFoundPage;
