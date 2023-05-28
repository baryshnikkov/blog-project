import { useTranslation } from 'react-i18next';
import { memo, useCallback, useEffect, useState } from 'react';
import { isMobile } from 'react-device-detect';
import { cn } from '@/shared/lib/classNames/classNames';
import { Modal } from '@/shared/ui/redesigned/Modal';
import { saveJsonSettings, useJsonSettings } from '@/entities/User';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Text } from '@/shared/ui/deprecated/Text';
import { Drawer } from '@/shared/ui/redesigned/Drawer';

interface ArticlePageGreetingProps {
    className?: string;
}

export const ArticlePageGreeting = memo((props: ArticlePageGreetingProps) => {
    const { className } = props;
    const { t } = useTranslation('articlePageGreeting');
    const [isOpen, setIsOpen] = useState(false);
    const { articlesPageWasOpen } = useJsonSettings();
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (!articlesPageWasOpen) {
            setIsOpen(true);
            dispatch(saveJsonSettings({ articlesPageWasOpen: true }));
        }
    }, [articlesPageWasOpen, dispatch]);

    const onClose = useCallback(() => {
        setIsOpen(false);
    }, []);

    const text = (
        <Text
            title={t('Добро пожаловать на страницу статей')}
            text={t(
                'Здесь вы можете искать и просматривать статьи на различные темы',
            )}
        />
    );

    if (isMobile) {
        return (
            <Drawer
                className={cn('', {}, [className])}
                lazy
                isOpen={isOpen}
                onClose={onClose}
            >
                {text}
            </Drawer>
        );
    }

    return (
        <Modal
            className={cn('', {}, [className])}
            lazy
            isOpen={isOpen}
            onClose={onClose}
        >
            {text}
        </Modal>
    );
});
