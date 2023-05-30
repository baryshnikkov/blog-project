import { DetailedHTMLProps, HTMLAttributes, ReactNode, useMemo } from 'react';
import { cn } from '@/shared/lib/classNames/classNames';
import cls from './Flex.module.scss';

type FlexJustify = 'start' | 'end' | 'center' | 'between';
type FlexAlign = 'start' | 'end' | 'center';
type FlexWrap = 'nowrap' | 'wrap';
export type FlexDirection = 'row' | 'column';
type FlexGap = '4' | '8' | '16' | '24' | '32';

const justifyClasses: Record<FlexJustify, string> = {
    start: cls.justifyStart,
    end: cls.justifyEnd,
    center: cls.justifyCenter,
    between: cls.justifyBetween,
};

const alignClasses: Record<FlexAlign, string> = {
    start: cls.alignStart,
    end: cls.alignEnd,
    center: cls.alignCenter,
};

const directionClasses: Record<FlexDirection, string> = {
    row: cls.directionRow,
    column: cls.directionColumn,
};

const gapClasses: Record<FlexGap, string> = {
    4: cls.gap4,
    8: cls.gap8,
    16: cls.gap16,
    24: cls.gap24,
    32: cls.gap32,
};

type DivProps = DetailedHTMLProps<
    HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
>;

export interface FlexProps extends DivProps {
    className?: string;
    children: ReactNode;
    justify?: FlexJustify;
    align?: FlexAlign;
    direction?: FlexDirection;
    gap?: FlexGap;
    wrap?: FlexWrap;
    max?: boolean;
}

export const Flex = (props: FlexProps) => {
    const {
        className,
        children,
        justify = 'start',
        align = 'start',
        direction = 'row',
        wrap = 'nowrap',
        gap = 4,
        max = true,
        ...otherProps
    } = props;

    const additional = useMemo(
        () => [
            className,
            justifyClasses[justify],
            alignClasses[align],
            directionClasses[direction],
            gapClasses[gap],
            cls[wrap],
        ],
        [align, className, direction, gap, justify, wrap],
    );

    const mods = useMemo(
        () => ({
            [cls.max]: max,
        }),
        [max],
    );

    return (
        <div className={cn(cls.Flex, mods, additional)} {...otherProps}>
            {children}
        </div>
    );
};
