import { Fragment, ReactNode, useMemo } from 'react';
import { Listbox as HListbox } from '@headlessui/react';
import { cn } from '@/shared/lib/classNames/classNames';
import { DropdownDirection } from '@/shared/types/ui';
import { HStack } from '../../../../redesigned/Stack';
import { Button } from '../../../Button/Button';
import cls from './ListBox.module.scss';
import popupCls from '../../styles/popup.module.scss';
import { mapDirectionClass } from '../../consts/consts';
import ArrowIcon from '@/shared/assets/icons/arrow-bottom.svg';
import { Icon } from '../../../Icon';

export interface ListBoxOption<T extends string> {
    value: string;
    content: ReactNode;
    disabled?: boolean;
}

interface ListBoxProps<T extends string> {
    options?: ListBoxOption<T>[];
    className?: string;
    value?: T;
    defaultValue?: string;
    onChange: (value: T) => void;
    readonly?: boolean;
    direction?: DropdownDirection;
    label?: string;
}

export function ListBox<T extends string>(props: ListBoxProps<T>) {
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
        () => [mapDirectionClass[direction], popupCls.menu],
        [direction],
    );

    const selectedItem = useMemo(() => {
        return options?.find((item) => item.value === value);
    }, [options, value]);

    return (
        <HStack gap="4" align="center" max={false}>
            {label && <span>{`${label}>`}</span>}
            <HListbox
                as="div"
                className={cn(cls.ListBox, {}, [className, popupCls.popup])}
                value={value}
                onChange={onChange}
                disabled={readonly}
            >
                <HListbox.Button as="div" className={cls.trigger}>
                    <Button
                        variant="filled"
                        disabled={readonly}
                        addonRight={<Icon Svg={ArrowIcon} />}
                    >
                        {selectedItem?.content ?? defaultValue}
                    </Button>
                </HListbox.Button>
                <HListbox.Options
                    className={cn(cls.options, {}, additionalOptionClasses)}
                >
                    {options?.map((option) => (
                        <HListbox.Option
                            as={Fragment}
                            key={option.value}
                            value={option.value}
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
                                            [popupCls.selected]: selected,
                                        },
                                        [],
                                    )}
                                >
                                    {selected}
                                    {option.content}
                                </li>
                            )}
                        </HListbox.Option>
                    ))}
                </HListbox.Options>
            </HListbox>
        </HStack>
    );
}
