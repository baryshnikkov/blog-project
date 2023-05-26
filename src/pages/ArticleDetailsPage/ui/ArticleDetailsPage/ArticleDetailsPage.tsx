import { memo } from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArticleDetails } from '@/entities/Article';
import { classNames } from '@/shared/lib/classNames/classNames';
import {
    DynamicModuleLoader,
    ReducerList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { Page } from '@/widgets/Page';
import { VStack } from '@/shared/ui/Stack';
import { ArticleRecommendationsList } from '@/features/ArticleRecommendationsList';
import { ArticleDetailsComments } from '../ArticleDetailsComments/ArticleDetailsComments';
import { articleDetailsPageReducer } from '../../model/slices';
import { ArticleDetailsPageHeader } from '../ArticleDetailsPageHeader/ArticleDetailsPageHeader';
import { ToggleFeatures } from '@/shared/features';
import { ArticleRating } from '@/features/ArticleRating';
import { Card } from '@/shared/ui/Card';

const initialReducers: ReducerList = {
    articleDetailsPage: articleDetailsPageReducer,
};

const ArticleDetailsPage = memo(() => {
    const { t } = useTranslation('articleDetails');
    const { id } = useParams<{ id: string }>();

    if (!id) {
        return null;
    }

    // const articleRating = toggleFeatures({
    //     name: 'isArticleRatingEnabled',
    //     on: () => <ArticleRating articleId={id} />,
    //     off: () => <Card>{t('Оценка статей скоро появится!')}</Card>,
    // });

    return (
        <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount>
            <Page className={classNames('ArticleDetailsPage', {}, [])}>
                <VStack gap="16">
                    <ArticleDetailsPageHeader />
                    <ArticleDetails id={id} />
                    {/* {articleRating} */}
                    <ToggleFeatures
                        feature="isArticleRatingEnabled"
                        on={<ArticleRating articleId={id} />}
                        off={<Card>{t('Оценка статей скоро появится!')}</Card>}
                    />
                    <ArticleRecommendationsList />
                    <ArticleDetailsComments id={id} />
                </VStack>
            </Page>
        </DynamicModuleLoader>
    );
});

export default ArticleDetailsPage;
