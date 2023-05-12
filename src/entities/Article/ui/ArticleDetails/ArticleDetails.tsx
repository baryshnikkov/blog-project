import { memo, useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { DynamicModuleLoader, ReducerList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import {
    Text, TextAlign, TextSize, TextTheme,
} from '@/shared/ui/Text/Text';
import { Skeleton } from '@/shared/ui/Skeleton/Skeleton';
import { Avatar } from '@/shared/ui/Avatar/Avatar';
import EyeIcon from '@/shared/assets/icons/eye-20-20.svg';
import CalendarIcon from '@/shared/assets/icons/calendar-20-20.svg';
import { Icon } from '@/shared/ui/Icon/Icon';
import { HStack, VStack } from '@/shared/ui/Stack';
import { ArticleBlockTypes } from '../../model/consts/articleConsts';
import { ArticleCodeBlockComponent } from '../ArticleCodeBlockComponent/ArticleCodeBlockComponent';
import { ArticleImageBlockComponent } from '../ArticleImageBlockComponent/ArticleImageBlockComponent';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';
import { ArticleBlocks } from '../../model/types/article';
import { getArticleDetailsData } from '../../model/selectors/getArticleDetailsData/getArticleDetailsData';
import { getArticleDetailsError } from '../../model/selectors/getArticleDetailsError/getArticleDetailsError';
import {
    getArticleDetailsIsLoading,
} from '../../model/selectors/getArticleDetailsIsLoading/getArticleDetailsIsLoading';
import cls from './ArticleDetails.module.scss';
import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice';
import { fetchArticleById } from '../../model/services/fetchArticleById/fetchArticleById';

interface ArticleDetailsProps {
    className?: string;
    id?: string;
}

const initialReducers: ReducerList = {
    articleDetails: articleDetailsReducer,
};

export const ArticleDetails = memo((props: ArticleDetailsProps) => {
    const {
        className,
        id,
    } = props;
    const { t } = useTranslation('articleDetails');
    const dispatch = useAppDispatch();
    const article = useSelector(getArticleDetailsData);
    const error = useSelector(getArticleDetailsError);
    const isLoading = useSelector(getArticleDetailsIsLoading);

    const renderBlock = useCallback((block: ArticleBlocks) => {
        switch (block.type) {
        case ArticleBlockTypes.CODE:
            return (
                <ArticleCodeBlockComponent
                    block={block}
                    key={block.id}
                />
            );
        case ArticleBlockTypes.IMAGE:
            return (
                <ArticleImageBlockComponent
                    block={block}
                    key={block.id}
                />
            );
        case ArticleBlockTypes.TEXT:
            return (
                <ArticleTextBlockComponent
                    block={block}
                    key={block.id}
                />
            );
        default:
            return null;
        }
    }, []);

    useEffect(() => {
        if (__PROJECT__ !== 'storybook') {
            dispatch(fetchArticleById(id));
        }
    }, [dispatch, id]);

    let content;

    if (isLoading) {
        content = (
            <>
                <Skeleton className={cls.avatar} width={200} height={200} border="50%" />
                <Skeleton width={300} height={32} />
                <Skeleton width={600} height={24} />
                <Skeleton width="100%" height={200} />
                <Skeleton width="100%" height={200} />
            </>
        );
    }

    if (error) {
        content = (
            <Text
                align={TextAlign.CENTER}
                theme={TextTheme.ERROR}
                title={t('Произошла ошибка при загрузке статьи.')}
            />
        );
    }

    if (!isLoading && !error) {
        content = (
            <>
                <HStack
                    justify="center"
                    max
                >
                    <Avatar
                        src={article?.img}
                        size={200}
                    />
                </HStack>
                <VStack>
                    <Text
                        title={article?.title}
                        text={article?.subtitle}
                        size={TextSize.L}
                    />
                    <HStack>
                        <Icon Svg={EyeIcon} />
                        <Text text={String(article?.views)} />
                    </HStack>
                    <HStack>
                        <Icon Svg={CalendarIcon} />
                        <Text text={article?.createdAt} />
                    </HStack>
                </VStack>
                {article?.blocks.map(renderBlock)}
            </>
        );
    }

    return (
        <DynamicModuleLoader
            reducers={initialReducers}
            removeAfterUnmount
        >
            <VStack
                className={classNames(cls.ArticleDetails, {}, [className])}
                gap="16"
            >
                {content}
            </VStack>
        </DynamicModuleLoader>
    );
});
