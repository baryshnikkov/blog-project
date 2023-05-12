import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button } from '@/shared/ui/Button/Button';
import cls from './PageError.module.scss';

interface PageErrorProps {
  className?: string
}

const reloadPage = () => {
    // eslint-disable-next-line no-restricted-globals
    location.reload();
};

export const PageError = memo(({ className }: PageErrorProps) => {
    const { t } = useTranslation('pageError');

    return (
        <div className={classNames(cls.PageError, {}, [className])}>
            <p>{t('Произошла непредвиденная ошибка')}</p>
            <Button
                onClick={reloadPage}
            >
                {t('Обновить страницу')}
            </Button>
        </div>
    );
});
