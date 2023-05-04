import { classNames } from 'shared/lib/classNames/classNames';
import { Fragment, memo, ReactNode } from 'react';
import { Listbox as HListbox } from '@headlessui/react';
import { HStack } from '../../ui/Stack';
import { Button } from '../../ui/Button/Button';
import cls from './ListBox.module.scss';

interface ListBoxOption {
    value: string;
    content: ReactNode;
    disabled?: boolean;
}

type DropdownDirection = 'top' | 'bottom';

const mapDirectionClass: Record<DropdownDirection, string> = {
    top: cls.optionsTop,
    bottom: cls.optionsBottom,
};

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

export const ListBox = memo((props: ListBoxProps) => {
    const {
        className,
        options,
        value,
        defaultValue,
        onChange,
        readonly = false,
        direction = 'bottom',
        label,
    } = props;

    const additionalOptionClasses = [
        mapDirectionClass[direction],
    ];

    return (
        <HStack gap="4" align="center">
            {label && (
                <span
                    className={classNames('', { [cls.disabled]: readonly }, [])}
                >
                    {`${label} > `}
                </span>
            )}
            <HListbox
                as="div"
                className={classNames(cls.ListBox, {}, [className])}
                value={value}
                onChange={onChange}
                disabled={readonly}
            >
                <HListbox.Button className={cls.trigger} disabled={readonly}>
                    <Button disabled={readonly}>
                        {value ?? defaultValue}
                    </Button>
                </HListbox.Button>
                <HListbox.Options className={classNames(cls.options, {}, additionalOptionClasses)}>
                    {options.map((option) => (
                        <HListbox.Option
                            as={Fragment}
                            key={option.value}
                            value={option.content}
                            disabled={option.disabled}
                        >
                            {({ active, selected }) => (
                                <li className={classNames(
                                    cls.option,
                                    {
                                        [cls.active]: active,
                                        [cls.disabled]: option.disabled,
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
