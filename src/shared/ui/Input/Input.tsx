import { classNames } from 'shared/lib/classNames/classNames';
import React, {
    InputHTMLAttributes, memo, useEffect, useRef, useState,
} from 'react';
import cls from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

interface InputProps extends HTMLInputProps {
    className?: string;
    value?: string;
    onChange?: (value: string) => void;
    type?: string;
    placeholder?: string;
    autoFocus?: boolean;
}

const WIDTH_SYMBOL = 9.65;

export const Input = memo((props: InputProps) => {
    const {
        className,
        value,
        onChange,
        type = 'text',
        placeholder,
        autoFocus,
        ...otherProps
    } = props;

    const [isFocused, setIsFocus] = useState(false);
    const [carriagePosition, setCarriagePosition] = useState(0);
    const refFocus = useRef<HTMLInputElement>(null);

    const onFocus = () => {
        setIsFocus(true);
    };

    const onBlur = () => {
        setIsFocus(false);
    };

    const onSelect = (e: any) => {
        setCarriagePosition(e?.target?.selectionStart);
    };

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
        setCarriagePosition(e.target.value.length);
    };

    useEffect(() => {
        if (autoFocus) {
            setIsFocus(true);
            refFocus.current?.focus();
        }
    }, [autoFocus]);

    return (
        <div className={classNames(cls.InputWrapper, {}, [className])}>
            {placeholder && (
                <div className={cls.placeholder}>
                    {`${placeholder}>`}
                </div>
            )}
            <div className={cls.carriageWrapper}>
                <input
                    className={cls.input}
                    ref={refFocus}
                    type={type}
                    value={value}
                    onChange={onChangeHandler}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    onSelect={onSelect}
                    {...otherProps}
                />
                {isFocused && (
                    <span
                        className={cls.carriage}
                        style={{ left: `${carriagePosition * WIDTH_SYMBOL}px` }}
                    />
                )}
            </div>
        </div>
    );
});
