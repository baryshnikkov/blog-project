import { classNames } from 'shared/lib/classNames/classNames';
import { Text } from 'shared/ui/Text/Text';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import {
    getProfileData,
    getProfileReadonly,
    profileActions,
    updateProfileData,
} from 'entities/Profile';
import { memo, useCallback } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getAuthUserData } from 'entities/User';
import cls from './ProfilePageHeader.module.scss';

interface ProfilePageHeaderProps {
  className?: string
}

export const ProfilePageHeader = memo(({ className }: ProfilePageHeaderProps) => {
    const { t } = useTranslation('profile');
    const readonly = useSelector(getProfileReadonly);
    const dispatch = useAppDispatch();

    const authData = useSelector(getAuthUserData);
    const profileData = useSelector(getProfileData);
    const canEdit = authData?.id === profileData?.id;

    const onEdit = useCallback(() => {
        dispatch(profileActions.setReadonly());
    }, [dispatch]);

    const onCancelEdit = useCallback(() => {
        dispatch(profileActions.cancelEdit());
    }, [dispatch]);

    const onSave = useCallback(() => {
        dispatch(updateProfileData());
    }, [dispatch]);

    return (
        <div className={classNames(cls.ProfilePageHeader, {}, [className])}>
            <Text title={t('Профиль')} />
            {canEdit && (
                <div className={cls.btnsWrapper}>
                    {readonly
                        ? (
                            <Button
                                theme={ButtonTheme.OUTLINE}
                                onClick={onEdit}
                            >
                                {t('Редактировать')}
                            </Button>
                        )
                        : (
                            <>
                                <Button
                                    theme={ButtonTheme.OUTLINE_RED}
                                    onClick={onCancelEdit}
                                >
                                    {t('Отменить')}
                                </Button>
                                <Button
                                    theme={ButtonTheme.OUTLINE}
                                    className={cls.saveBtn}
                                    onClick={onSave}
                                >
                                    {t('Сохранить')}
                                </Button>
                            </>
                        )}
                </div>
            )}
        </div>
    );
});
