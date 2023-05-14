import { memo, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Avatar } from '@/shared/ui/Avatar/Avatar';
import { Dropdown } from '@/shared/ui/Popups';
import {
    getAuthUserData, isUserAdmin, isUserManager, userActions,
} from '@/entities/User';
import { RoutePath } from '@/shared/const/router';

interface AvatarDropdownProps {
    className?: string;
}

export const AvatarDropdown = memo((props: AvatarDropdownProps) => {
    const {
        className,
    } = props;
    const { t } = useTranslation('');
    const dispatch = useDispatch();
    const isAdmin = useSelector(isUserAdmin);
    const isManager = useSelector(isUserManager);
    const authData = useSelector(getAuthUserData);

    const isAdminPanelAvailable = isAdmin || isManager;

    const onLogout = useCallback(() => {
        dispatch(userActions.logout());
    }, [dispatch]);

    if (!authData) {
        return null;
    }

    return (
        <Dropdown
            className={classNames('', {}, [className])}
            items={[
                {
                    content: t('Профиль'),
                    href: RoutePath.profile + authData.id,
                },
                ...(isAdminPanelAvailable
                    ? [{
                        content: t('Админ панель'),
                        href: RoutePath.admin_panel,
                    }]
                    : []),
                {
                    content: t('Выйти'),
                    onClick: onLogout,
                },
            ]}
            trigger={<Avatar src={authData.avatar} size={30} />}
            direction="bottom left"
        />
    );
});
