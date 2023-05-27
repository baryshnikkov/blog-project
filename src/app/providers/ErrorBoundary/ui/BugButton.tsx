import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import { cn } from '@/shared/lib/classNames/classNames';
import { Button } from '@/shared/ui/deprecated/Button';

interface BugButtonProps {
    className?: string;
}

export const BugButton = ({ className }: BugButtonProps) => {
    const { t } = useTranslation('pageError');
    const [error, setError] = useState(false);

    const onThrowError = () => setError(true);

    useEffect(() => {
        if (error) {
            throw new Error();
        }
    }, [error]);

    return (
        <Button onClick={onThrowError} className={cn('', {}, [className])}>
            {t('Вызвыть ошибку')}
        </Button>
    );
};
