import { memo } from 'react';
import { cn } from '@/shared/lib/classNames/classNames';
import { Loader } from '@/shared/ui/deprecated/Loader';
import cls from './PageLoader.module.scss';

interface PageLoaderProps {
    className?: string;
}

export const PageLoader = memo(({ className }: PageLoaderProps) => (
    <div className={cn(cls.PageLoader, {}, [className])}>
        <Loader />
    </div>
));
