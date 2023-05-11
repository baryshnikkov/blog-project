import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import {
    ChangeEvent,
    InputHTMLAttributes,
    memo,
    useEffect,
    useRef,
    useState,
} from 'react';
import cls from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'readOnly'>

interface InputProps extends HTMLInputProps {
    className?: string;
    value?: string | number;
    onChange?: (value: string) => void;
    type?: string;
    placeholder?: string;
    autoFocus?: boolean;
    readonly?: boolean;
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
        readonly,
        ...otherProps
    } = props;

    const [isFocused, setIsFocus] = useState(false);
    const [carriagePosition, setCarriagePosition] = useState(0);
    const refFocus = useRef<HTMLInputElement>(null);

    const isCarriageVisible = isFocused && !readonly;

    const onFocus = () => {
        setIsFocus(true);
    };

    const onBlur = () => {
        setIsFocus(false);
    };

    const onSelect = (e: any) => {
        setCarriagePosition(e?.target?.selectionStart);
    };

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
        setCarriagePosition(e.target.value.length);
    };

    useEffect(() => {
        if (autoFocus) {
            setIsFocus(true);
            refFocus.current?.focus();
        }
    }, [autoFocus]);

    const mods: Mods = {
        [cls.readonly]: readonly,
    };

    return (
        <div className={classNames(cls.InputWrapper, mods, [className])}>
            {placeholder && (
                <div className={cls.placeholder}>
                    {`${placeholder} >`}
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
                    readOnly={readonly}
                    {...otherProps}
                />
                {isCarriageVisible && (
                    <span
                        className={cls.carriage}
                        style={{ left: `${carriagePosition * WIDTH_SYMBOL}px` }}
                    />
                )}
            </div>
        </div>
    );
});
