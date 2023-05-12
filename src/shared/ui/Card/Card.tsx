import { HTMLAttributes, ReactNode } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Card.module.scss';

export enum CardTheme {
    NORMAL = 'normal',
    OUTLINED = 'outlined',
}

interface CardProps extends HTMLAttributes<HTMLDivElement>{
    className?: string;
    children: ReactNode;
    theme?: CardTheme;
    isFullWidth?: boolean;
}

export const Card = (props: CardProps) => {
    const {
        className,
        children,
        theme = CardTheme.NORMAL,
        isFullWidth,
        ...otherProps
    } = props;

    return (
        <div
            className={classNames(cls.Card, { [cls.fullWidth]: isFullWidth }, [className, cls[theme]])}
            {...otherProps}
        >
            {children}
        </div>
    );
};
