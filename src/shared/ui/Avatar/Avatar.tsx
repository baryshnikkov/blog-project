import { classNames } from 'shared/lib/classNames/classNames';
import { CSSProperties, memo, useMemo } from 'react';
import cls from './Avatar.module.scss';

interface AvatarProps {
  className?: string;
  src: string;
  alt?: string;
  size?: number;
}

export const Avatar = memo((props: AvatarProps) => {
    const {
        className,
        src,
        alt,
        size,
    } = props;

    const styles: CSSProperties = useMemo(() => ({
        width: size || 100,
        height: size || 100,

    }), [size]);

    return (
        <img
            className={classNames(cls.Avatar, {}, [className])}
            src={src}
            alt={alt}
            style={styles}
        />
    );
});
