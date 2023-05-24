import { memo, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { TabItem, Tabs } from '@/shared/ui/Tabs';
import { ArticleTypes } from '@/entities/Article';

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
        <Tabs
            className={classNames('', {}, [className])}
            tabs={typeTabs}
            value={value}
            onTabClick={onTabClick}
        />
    );
});
