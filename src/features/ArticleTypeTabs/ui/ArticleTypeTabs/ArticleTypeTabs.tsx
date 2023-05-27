import { memo, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { cn } from '@/shared/lib/classNames/classNames';
import { TabItem, Tabs as TabsDeprecated } from '@/shared/ui/deprecated/Tabs';
import { Tabs } from '@/shared/ui/redesigned/Tabs';
import { ArticleTypes } from '@/entities/Article';
import { ToggleFeatures } from '@/shared/features';

interface ArticleTypeTabsProps {
    className?: string;
    value: ArticleTypes;
    onChangeType: (type: ArticleTypes) => void;
}
export const ArticleTypeTabs = memo((props: ArticleTypeTabsProps) => {
    const { className, value, onChangeType } = props;

    const { t } = useTranslation('articles');

    const typeTabs = useMemo<TabItem[]>(
        () => [
            {
                value: ArticleTypes.ALL,
                content: t('Все'),
            },
            {
                value: ArticleTypes.IT,
                content: t('Айти'),
            },
            {
                value: ArticleTypes.SCIENCE,
                content: t('Наука'),
            },
            {
                value: ArticleTypes.ECONOMICS,
                content: t('Экономика'),
            },
        ],
        [t],
    );

    const onTabClick = useCallback(
        (tab: TabItem) => {
            onChangeType(tab.value as ArticleTypes);
        },
        [onChangeType],
    );

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={
                <Tabs
                    direction="column"
                    tabs={typeTabs}
                    value={value}
                    onTabClick={onTabClick}
                    className={cn('', {}, [className])}
                />
            }
            off={
                <TabsDeprecated
                    tabs={typeTabs}
                    value={value}
                    onTabClick={onTabClick}
                    className={cn('', {}, [className])}
                />
            }
        />
    );
});
