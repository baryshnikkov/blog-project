import './Loader.scss';
import { memo } from 'react';
import { cn } from '@/shared/lib/classNames/classNames';

interface LoaderProps {
    className?: string;
}

/**
 * Устарел, используем новые компоненты из папки redesigned
 * @deprecated
 */
export const Loader = memo(({ className }: LoaderProps) => (
    <div className={cn('lds-roller', {}, [className])}>
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
    </div>
));
