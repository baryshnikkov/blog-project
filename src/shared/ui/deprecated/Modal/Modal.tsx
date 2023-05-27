import React, { ReactNode, useMemo } from 'react';
import { cn, Mods } from '@/shared/lib/classNames/classNames';
import { useModal } from '@/shared/lib/hooks/useModal/useModal';
import { Overlay } from '../../redesigned/Overlay/Overlay';
import { Portal } from '../../redesigned/Portal/Portal';
import cls from './Modal.module.scss';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';

interface ModalProps {
    className?: string;
    children?: ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
    lazy?: boolean;
}

/**
 * Устарел, используем новые компоненты из папки redesigned
 * @deprecated
 */
export const Modal = (props: ModalProps) => {
    const { className, children, isOpen, onClose, lazy } = props;
    const { theme } = useTheme();
    const { isClosing, isMounted, close } = useModal({
        animationDelay: 300,
        onClose,
        isOpen,
    });

    const mods: Mods = useMemo(
        () => ({
            [cls.opened]: isOpen,
            [cls.isClosing]: isClosing,
        }),
        [isClosing, isOpen],
    );

    if (lazy && !isMounted) {
        return null;
    }

    return (
        <Portal>
            <div className={cn(cls.Modal, mods, [className, theme])}>
                <Overlay onClick={close} />
                <div className={cls.content}>{children}</div>
            </div>
        </Portal>
    );
};
