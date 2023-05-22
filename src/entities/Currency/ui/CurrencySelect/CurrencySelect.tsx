import { memo, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ListBox } from '@/shared/ui/Popups';
import { Currency } from '../../model/types/currency';

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

    return (
        <ListBox
            className={classNames('', {}, [className])}
            options={CurrencyList}
            onChange={onChangeHandler}
            value={value}
            defaultValue={t('Не указано')}
            readonly={readonly}
            direction="top right"
            label={t('Валюта')}
        />
    );
});
