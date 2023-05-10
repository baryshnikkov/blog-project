import { classNames, Mods } from 'shared/lib/classNames/classNames';
import React, { ReactNode, useMemo } from 'react';
import { useTheme } from 'app/providers/ThemeProvider';
import { useModal } from 'shared/lib/hooks/useModal/useModal';
import { Overlay } from '../Overlay/Overlay';
import { Portal } from '../Portal/Portal';
import cls from './Modal.module.scss';

interface ModalProps {
  className?: string;
  children?: ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
  lazy?: boolean;
}

export const Modal = (props: ModalProps) => {
    const {
        className,
        children,
        isOpen,
        onClose,
        lazy,
    } = props;
    const { theme } = useTheme();
    const {
        isClosing,
        isMounted,
        close,
    } = useModal({
        animationDelay: 300,
        onClose,
        isOpen,
    });

    const mods: Mods = useMemo(() => ({
        [cls.opened]: isOpen,
        [cls.isClosing]: isClosing,
    }), [isClosing, isOpen]);

    if (lazy && !isMounted) {
        return null;
    }

    return (
        <Portal>
            <div className={classNames(cls.Modal, mods, [className, theme])}>
                <Overlay onClick={close} />
                <div
                    className={cls.content}
                >
                    {children}
                </div>
            </div>
        </Portal>
    );
};
