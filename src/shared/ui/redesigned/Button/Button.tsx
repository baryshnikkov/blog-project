import { ButtonHTMLAttributes, memo, ReactNode } from 'react';
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
        ...otherProps
    } = props;

    const mods: Mods = {
        [cls.square]: square,
        [cls.disabled]: disabled,
        [cls.fullWidth]: fullWidth,
        [cls.inverted]: isInverted,
    };

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
            {children}
        </button>
    );
});
