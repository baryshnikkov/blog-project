import { CSSProperties, memo, useMemo } from 'react';
import { cn } from '@/shared/lib/classNames/classNames';
import cls from './Avatar.module.scss';
import { AppImage } from '../../redesigned/AppImage';
import UserIcon from '@/shared/assets/icons/user-20-20.svg';
import { Icon } from '../Icon';
import { Skeleton } from '../Skeleton';

interface AvatarProps {
    className?: string;
    src?: string;
    alt?: string;
    size?: number;
}

export const Avatar = memo((props: AvatarProps) => {
    const { className, src, alt, size } = props;

    const styles: CSSProperties = useMemo(
        () => ({
            width: size || 100,
            height: size || 100,
        }),
        [size],
    );

    return (
        <AppImage
            className={cn(cls.Avatar, {}, [className])}
            src={src}
            alt={alt}
            style={styles}
            errorFallback={<Icon Svg={UserIcon} width={size} height={size} />}
            fallback={<Skeleton width={size} height={size} border="50%" />}
        />
    );
});
