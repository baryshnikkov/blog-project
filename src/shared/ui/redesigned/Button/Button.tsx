import { ButtonHTMLAttributes, memo, ReactNode, useMemo } from 'react';
import { cn, Mods } from '@/shared/lib/classNames/classNames';
import cls from './Button.module.scss';

type ButtonVariant = 'clear' | 'outline' | 'filled';

type ButtonSize = 'm' | 'l' | 'xl';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    variant?: ButtonVariant;
    square?: boolean;
    size?: ButtonSize;
    disabled?: boolean;
    fullWidth?: boolean;
    children?: ReactNode;
    isInverted?: boolean;
    addonLeft?: ReactNode;
    addonRight?: ReactNode;
}

export const Button = memo((props: ButtonProps) => {
    const {
        className,
        children,
        variant = 'clear',
        square,
        disabled,
        size = 'm',
        fullWidth,
        isInverted,
        addonLeft,
        addonRight,
        ...otherProps
    } = props;

    const mods: Mods = useMemo(() => {
        return {
            [cls.square]: square,
            [cls.disabled]: disabled,
            [cls.fullWidth]: fullWidth,
            [cls.withAddonLeft]: Boolean(addonLeft),
            [cls.withAddonRight]: Boolean(addonRight),
        };
    }, [addonLeft, addonRight, disabled, fullWidth, square]);

    const additional: Array<string | undefined> = [
        className,
        cls[variant],
        cls[size],
    ];

    return (
        <button
            type="button"
            className={cn(cls.Button, mods, additional)}
            disabled={disabled}
            {...otherProps}
        >
            <div className={cls.addonLeft}>{addonLeft}</div>
            {children}
            <div className={cls.addonRight}>{addonRight}</div>
        </button>
    );
});
