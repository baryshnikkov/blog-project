import { memo, SVGProps, VFC } from 'react';
import { cn } from '@/shared/lib/classNames/classNames';
import cls from './Icon.module.scss';

interface IconProps extends SVGProps<SVGSVGElement> {
    className?: string;
    Svg: VFC<SVGProps<SVGSVGElement>>;
    isInverted?: boolean;
}

/**
 * Устарел, используем новые компоненты из папки redesigned
 * @deprecated
 */
export const Icon = memo((props: IconProps) => {
    const { className, Svg, isInverted = false, ...otherProps } = props;

    return (
        <Svg
            className={cn(cls.Icon, { [cls.inverted]: isInverted }, [
                className,
            ])}
            {...otherProps}
        />
    );
});
