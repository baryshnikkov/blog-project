import { memo, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { ListBox } from 'shared/ui/ListBox/ListBox';
import { Country } from '../../model/types/country';

interface CountrySelectProps {
    className?: string;
    value?: Country;
    onChange?: (value: Country) => void;
    readonly?: boolean;
}

export const CountrySelect = memo((props: CountrySelectProps) => {
    const {
        className,
        value,
        onChange,
        readonly,
    } = props;
    const { t } = useTranslation('countrySelect');

    const CountryList = useMemo(() => Object.entries(Country).map((el) => (
        {
            value: el[0],
            content: el[1],
        }
    )), []);

    const onChangeHandler = useCallback((value: string) => {
        onChange?.(value as Country);
    }, [onChange]);

    return (
        <ListBox
            className={classNames('', {}, [className])}
            options={CountryList}
            onChange={onChangeHandler}
            value={value}
            defaultValue={t('Не указано')}
            readonly={readonly}
            direction="top right"
            label={t('Страна')}
        />
    );
});
