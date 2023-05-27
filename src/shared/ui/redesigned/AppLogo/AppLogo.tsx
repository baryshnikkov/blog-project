import { memo } from 'react';
import { HStack } from '../Stack';
import cls from './AppLogo.module.scss';
import AppSvg from '@/shared/assets/icons/app.svg';
import { cn } from '@/shared/lib/classNames/classNames';

interface AppLogoProps {
    className?: string;
    size?: number;
}

export const AppLogo = memo((props: AppLogoProps) => {
    const { className, size } = props;

    return (
        <HStack
            max
            justify="center"
            align="center"
            className={cn(cls.appLogoWrapper, {}, [className])}
        >
            <div className={cls.gradientBig} />
            <div className={cls.gradientSmall} />
            <AppSvg
                className={cls.appLogo}
                width={size}
                height={size}
                color="black"
            />
        </HStack>
    );
});
