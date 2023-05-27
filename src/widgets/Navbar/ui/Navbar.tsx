import { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { cn } from '@/shared/lib/classNames/classNames';
import { Button, ButtonTheme } from '@/shared/ui/deprecated/Button';
import { LoginModal } from '@/features/AuthByUsername';
import { getAuthUserData } from '@/entities/User';
import { Text, TextTheme } from '@/shared/ui/deprecated/Text';
import { AppLink, AppLinkTheme } from '@/shared/ui/deprecated/AppLink';
import { HStack } from '@/shared/ui/redesigned/Stack';
import { NotificationButton } from '@/features/NotificationButton';
import { AvatarDropdown } from '@/features/AvatarDropdown';
import clsDepr from './NavbarDeprecated.module.scss';
import cls from './Navbar.module.scss';
import { getRouteArticleCreate } from '@/shared/const/router';
import { ToggleFeatures } from '@/shared/features';

interface NavbarProps {
    className?: string;
}

export const Navbar = memo(({ className }: NavbarProps) => {
    const { t } = useTranslation('');
    const [isAuthModal, setIsAuthModal] = useState(false);
    const authData = useSelector(getAuthUserData);

    const onCloseModal = useCallback(() => {
        setIsAuthModal(false);
    }, []);

    const onOpenModal = useCallback(() => {
        setIsAuthModal(true);
    }, []);

    if (authData) {
        return (
            <ToggleFeatures
                feature="isAppRedesigned"
                on={
                    <header className={cn(cls.Navbar, {}, [className])}>
                        <HStack
                            className={cls.actions}
                            gap="16"
                            justify="end"
                            align="center"
                        >
                            <NotificationButton />
                            <AvatarDropdown />
                        </HStack>
                    </header>
                }
                off={
                    <header className={cn(clsDepr.Navbar, {}, [className])}>
                        <Text
                            className={clsDepr.appName}
                            title={t('Блог')}
                            theme={TextTheme.INVERTED_PRIMARY}
                        />
                        <AppLink
                            className={clsDepr.linkCreate}
                            to={getRouteArticleCreate()}
                            theme={AppLinkTheme.INVERTED_PRIMARY}
                        >
                            {t('Создать статью')}
                        </AppLink>
                        <HStack
                            className={clsDepr.actions}
                            gap="16"
                            justify="end"
                            align="center"
                        >
                            <NotificationButton />
                            <AvatarDropdown />
                        </HStack>
                    </header>
                }
            />
        );
    }

    return (
        <header className={cn(clsDepr.Navbar, {}, [className])}>
            <Text
                className={clsDepr.appName}
                title={t('Блог')}
                theme={TextTheme.INVERTED_PRIMARY}
            />
            <Button
                theme={ButtonTheme.CLEAR_INVERTED}
                className={clsDepr.links}
                onClick={onOpenModal}
            >
                {t('Войти')}
            </Button>
            {isAuthModal && (
                <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />
            )}
        </header>
    );
});
