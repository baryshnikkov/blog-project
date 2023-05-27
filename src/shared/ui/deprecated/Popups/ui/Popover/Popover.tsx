import { Popover as HPopover } from '@headlessui/react';
import { memo, ReactNode, useMemo } from 'react';
import { cn } from '@/shared/lib/classNames/classNames';
import { DropdownDirection } from '@/shared/types/ui';
import cls from './Popover.module.scss';
import popupCls from '../../styles/popup.module.scss';
import { mapDirectionClass } from '../../consts/consts';

interface PopoverProps {
    className?: string;
    trigger: ReactNode;
    direction?: DropdownDirection;
    children: ReactNode;
}

/**
 * Устарел, используем новые компоненты из папки redesigned
 * @deprecated
 */
export const Popover = memo((props: PopoverProps) => {
    const { className, trigger, direction = 'bottom right', children } = props;

    const additionalPanelClasses = useMemo(
        () => [mapDirectionClass[direction]],
        [direction],
    );

    return (
        <HPopover className={cn(cls.Popover, {}, [className, popupCls.popup])}>
            <HPopover.Button as="div" className={popupCls.trigger}>
                {trigger}
            </HPopover.Button>

            <HPopover.Panel
                className={cn(cls.panel, {}, additionalPanelClasses)}
            >
                {children}
            </HPopover.Panel>
        </HPopover>
    );
});
