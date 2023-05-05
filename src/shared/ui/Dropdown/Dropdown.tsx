import { classNames } from 'shared/lib/classNames/classNames';
import { Fragment, memo, ReactNode } from 'react';
import { Menu } from '@headlessui/react';
import { DropdownDirection } from 'shared/types/ui';
import cls from './Dropdown.module.scss';
import { AppLink } from '../AppLink/AppLink';

interface DropdownItem {
    content?: ReactNode;
    disabled?: boolean;
    onClick?: () => void;
    href?: string;
}

const mapDirectionClass: Record<DropdownDirection, string> = {
    'top left': cls.optionsTopLeft,
    'top right': cls.optionsTopRight,
    'bottom left': cls.optionsBottomLeft,
    'bottom right': cls.optionsBottomRight,
};

interface DropdownProps {
    className?: string;
    items: DropdownItem[];
    trigger: ReactNode;
    direction?: DropdownDirection;
}

export const Dropdown = memo((props: DropdownProps) => {
    const {
        className,
        items,
        trigger,
        direction = 'bottom right',
    } = props;

    const additionalMenuClasses = [
        mapDirectionClass[direction],
    ];

    return (
        <Menu
            as="div"
            className={classNames(cls.Dropdown, {}, [className])}
        >
            <Menu.Button className={cls.btn}>
                {trigger}
            </Menu.Button>
            <Menu.Items className={classNames(cls.menu, {}, additionalMenuClasses)}>
                {items.map((item) => {
                    const content = ({ active }: {active: boolean}) => (
                        <button
                            className={classNames(cls.item, { [cls.active]: active }, [])}
                            type="button"
                            onClick={item.onClick}
                        >
                            {item.content}
                        </button>
                    );

                    if (item.href) {
                        return (
                            <Menu.Item
                                as={AppLink}
                                to={item.href}
                                disabled={item.disabled}
                            >
                                {content}
                            </Menu.Item>
                        );
                    }

                    return (
                        <Menu.Item
                            as={Fragment}
                            disabled={item.disabled}
                        >
                            {content}
                        </Menu.Item>
                    );
                })}
            </Menu.Items>
        </Menu>
    );
});
