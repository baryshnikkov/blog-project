import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { cn } from '@/shared/lib/classNames/classNames';
import { Text as TextDeprecated, TextSize } from '@/shared/ui/deprecated/Text';
import { Text } from '@/shared/ui/redesigned/Text';
import { ArticleList } from '@/entities/Article';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { useArticleRecommendationsList } from '../../api/articleRecommendationsApi';
import { ToggleFeatures } from '@/shared/lib/features';

interface ArticleRecommendationsListProps {
    className?: string;
}

export const ArticleRecommendationsList = memo(
    (props: ArticleRecommendationsListProps) => {
        const { className } = props;
        const { t } = useTranslation();
        const {
            isLoading,
            error,
            data: articles,
        } = useArticleRecommendationsList(3);

        if (isLoading || error || !articles) {
            return null;
        }

        return (
            <VStack
                className={cn('', {}, [className])}
                gap="8"
                data-testid="ArticleRecommendationsList"
            >
                <ToggleFeatures
                    feature="isAppRedesigned"
                    on={<Text size="l" title={t('Рекомендуем')} />}
                    off={
                        <TextDeprecated
                            size={TextSize.L}
                            title={t('Рекомендуем')}
                        />
                    }
                />
                <ArticleList articles={articles} target="_blank" />
            </VStack>
        );
    },
);
