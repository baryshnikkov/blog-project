import { memo, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { ListBox as ListBoxDeprecated } from '@/shared/ui/deprecated/Popups';
import { ListBox } from '@/shared/ui/redesigned/Popups';
import { Currency } from '../../model/types/currency';
import { ToggleFeatures } from '@/shared/lib/features';

interface CurrencySelectProps {
    className?: string;
    value?: Currency;
    onChange?: (value: Currency) => void;
    readonly?: boolean;
}

export const CurrencySelect = memo((props: CurrencySelectProps) => {
    const { className, value, onChange, readonly } = props;
    const { t } = useTranslation('currencySelect');

    const CurrencyList = useMemo(
        () =>
            Object.entries(Currency).map((el) => ({
                value: el[0],
                content: el[1],
            })),
        [],
    );

    const onChangeHandler = useCallback(
        (value: string) => {
            onChange?.(value as Currency);
        },
        [onChange],
    );

    const propsListBox = {
        className,
        value,
        defaultValue: t('Укажите валюту'),
        label: t('Укажите валюту'),
        options: CurrencyList,
        onChange: onChangeHandler,
        readonly,
        direction: 'top right' as const,
    };

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={<ListBox {...propsListBox} />}
            off={<ListBoxDeprecated {...propsListBox} />}
        />
    );
});
