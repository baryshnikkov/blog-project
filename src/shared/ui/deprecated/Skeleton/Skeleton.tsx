import { CSSProperties, memo, useMemo } from 'react';
import { cn } from '@/shared/lib/classNames/classNames';
import cls from './Skeleton.module.scss';

interface SkeletonProps {
    className?: string;
    height?: string | number;
    width?: string | number;
    border?: string;
}

/**
 * Устарел, используем новые компоненты из папки redesigned
 * @deprecated
 */
export const Skeleton = memo((props: SkeletonProps) => {
    const { className, height, width, border } = props;

    const styles: CSSProperties = useMemo(
        () => ({
            width,
            height,
            borderRadius: border,
        }),
        [border, height, width],
    );

    return <div className={cn(cls.Skeleton, {}, [className])} style={styles} />;
});
