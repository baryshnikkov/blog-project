import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Text, TextAlign, TextTheme } from '@/shared/ui/Text/Text';
import { Input } from '@/shared/ui/Input/Input';
import { Loader } from '@/shared/ui/Loader/Loader';
import { memo } from 'react';
import { Avatar } from '@/shared/ui/Avatar/Avatar';
import { Currency, CurrencySelect } from '@/entities/Currency';
import { Country, CountrySelect } from '@/entities/Country';
import { HStack, VStack } from '@/shared/ui/Stack';
import cls from './ProfileCard.module.scss';
import { Profile } from '../../model/types/profile';

interface ProfileCardProps {
    className?: string
    data?: Profile;
    isLoading?: boolean;
    error?: string;
    readonly?: boolean;
    onChangeFirstname?: (value?: string) => void;
    onChangeLastname?: (value?: string) => void;
    onChangeAge?: (value?: string) => void;
    onChangeCity?: (value?: string) => void;
    onChangeUsername?: (value?: string) => void;
    onChangeAvatar?: (value?: string) => void;
    onChangeCurrency?: (currency?: Currency) => void;
    onChangeCountry?: (country?: Country) => void;
}

export const ProfileCard = memo((props: ProfileCardProps) => {
    const {
        className,
        data,
        isLoading,
        error,
        readonly,
        onChangeFirstname,
        onChangeLastname,
        onChangeAge,
        onChangeCity,
        onChangeUsername,
        onChangeAvatar,
        onChangeCurrency,
        onChangeCountry,
    } = props;
    const { t } = useTranslation('profile');

    if (isLoading) {
        return (
            <HStack
                className={classNames(cls.ProfileCard, {}, [className, cls.loading])}
                justify="center"
                align="center"
                max
            >
                <Loader />
            </HStack>
        );
    }

    if (error) {
        return (
            <HStack
                className={classNames(cls.ProfileCard, {}, [className, cls.error])}
                justify="center"
                align="center"
                max
            >
                <Text
                    theme={TextTheme.ERROR}
                    title={t('Произошла ошибка при загрузке профиля')}
                    text={t('Попробуйте обновить страницу')}
                    align={TextAlign.CENTER}
                />
            </HStack>
        );
    }

    const mods: Mods = {
        [cls.editing]: !readonly,
    };

    return (
        <VStack
            className={classNames(cls.ProfileCard, mods, [className])}
            max
        >
            {data?.avatar && (
                <HStack
                    justify="center"
                    align="center"
                    max
                >
                    <Avatar
                        src={data?.avatar}
                        alt={t('Аватар')}
                    />
                </HStack>
            )}
            <Input
                value={data?.first}
                placeholder={t('Имя')}
                onChange={onChangeFirstname}
                readonly={readonly}
                data-testid="ProfileCard.Firstname"
            />
            <Input
                value={data?.lastname}
                placeholder={t('Фамилия')}
                onChange={onChangeLastname}
                readonly={readonly}
                data-testid="ProfileCard.Lastname"
            />
            <Input
                value={data?.age}
                placeholder={t('Возраст')}
                onChange={onChangeAge}
                readonly={readonly}
                data-testid="ProfileCard.Age"
            />
            <Input
                value={data?.city}
                placeholder={t('Город')}
                onChange={onChangeCity}
                readonly={readonly}
                data-testid="ProfileCard.City"
            />
            <Input
                value={data?.username}
                placeholder={t('Имя пользователя')}
                onChange={onChangeUsername}
                readonly={readonly}
                data-testid="ProfileCard.Username"
            />
            <Input
                value={data?.avatar}
                placeholder={t('Аватар')}
                onChange={onChangeAvatar}
                readonly={readonly}
                data-testid="ProfileCard.Avatar"
            />
            <CountrySelect
                value={data?.country}
                onChange={onChangeCountry}
                readonly={readonly}
                data-testid="ProfileCard.Country"
            />
            <CurrencySelect
                value={data?.currency}
                onChange={onChangeCurrency}
                readonly={readonly}
                data-testid="ProfileCard.Currency"
            />
        </VStack>
    );
});
