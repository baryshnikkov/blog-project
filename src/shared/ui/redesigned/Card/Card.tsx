import { HTMLAttributes, ReactNode } from 'react';
import { cn } from '@/shared/lib/classNames/classNames';
import cls from './Card.module.scss';

type CardVariant = 'normal' | 'outlined' | 'light';

type CardPadding = '0' | '8' | '16' | '24';

export type CardBorder = 'round' | 'normal' | 'partial';

const mapPaddingToClass: Record<CardPadding, string> = {
    '0': 'gap_0',
    '8': 'gap_8',
    '16': 'gap_16',
    '24': 'gap_24',
};

interface CardProps extends HTMLAttributes<HTMLDivElement> {
    className?: string;
    children: ReactNode;
    variant?: CardVariant;
    isFullWidth?: boolean;
    padding?: CardPadding;
    border?: CardBorder;
}

export const Card = (props: CardProps) => {
    const {
        className,
        children,
        variant = 'normal',
        isFullWidth,
        padding = '8',
        border = 'normal',
        ...otherProps
    } = props;

    const paddingClass = mapPaddingToClass[padding];

    return (
        <div
            className={cn(cls.Card, { [cls.fullWidth]: isFullWidth }, [
                className,
                cls[variant],
                cls[paddingClass],
                cls[border],
            ])}
            {...otherProps}
        >
            {children}
        </div>
    );
};
