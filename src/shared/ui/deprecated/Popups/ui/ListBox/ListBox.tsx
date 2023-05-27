import { Fragment, memo, ReactNode, useMemo } from 'react';
import { Listbox as HListbox } from '@headlessui/react';
import { cn } from '@/shared/lib/classNames/classNames';
import { DropdownDirection } from '@/shared/types/ui';
import { HStack } from '../../../../redesigned/Stack';
import { Button } from '../../../Button/Button';
import cls from './ListBox.module.scss';
import popupCls from '../../styles/popup.module.scss';
import { mapDirectionClass } from '../../consts/consts';

interface ListBoxOption {
    value: string;
    content: ReactNode;
    disabled?: boolean;
}

interface ListBoxProps {
    className?: string;
    options: ListBoxOption[];
    value?: string;
    defaultValue?: string;
    onChange: <T extends string>(value: T) => void;
    readonly?: boolean;
    direction?: DropdownDirection;
    label?: string;
}

/**
 * Устарел, используем новые компоненты из папки redesigned
 * @deprecated
 */
export const ListBox = memo((props: ListBoxProps) => {
    const {
        className,
        options,
        value,
        defaultValue,
        onChange,
        readonly = false,
        direction = 'bottom right',
        label,
    } = props;

    const additionalOptionClasses = useMemo(
        () => [mapDirectionClass[direction]],
        [direction],
    );

    return (
        <HStack gap="4" align="center">
            {label && (
                <span className={cn('', { [popupCls.disabled]: readonly }, [])}>
                    {`${label} > `}
                </span>
            )}
            <HListbox
                as="div"
                className={cn(cls.ListBox, {}, [className, popupCls.popup])}
                value={value}
                onChange={onChange}
                disabled={readonly}
            >
                <HListbox.Button as="div" className={cls.trigger}>
                    <Button disabled={readonly}>{value ?? defaultValue}</Button>
                </HListbox.Button>
                <HListbox.Options
                    className={cn(cls.options, {}, additionalOptionClasses)}
                >
                    {options.map((option) => (
                        <HListbox.Option
                            as={Fragment}
                            key={option.value}
                            value={option.content}
                            disabled={option.disabled}
                        >
                            {({ active, selected }) => (
                                <li
                                    className={cn(
                                        cls.option,
                                        {
                                            [popupCls.active]: active,
                                            [popupCls.disabled]:
                                                option.disabled,
                                        },
                                        [],
                                    )}
                                >
                                    {selected && '!!!'}
                                    {option.content}
                                </li>
                            )}
                        </HListbox.Option>
                    ))}
                </HListbox.Options>
            </HListbox>
        </HStack>
    );
});
