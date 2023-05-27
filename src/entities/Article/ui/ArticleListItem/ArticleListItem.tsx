import { HTMLAttributeAnchorTarget, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { cn } from '@/shared/lib/classNames/classNames';
import { Text } from '@/shared/ui/deprecated/Text';
import { Icon } from '@/shared/ui/deprecated/Icon';
import EyeIcon from '@/shared/assets/icons/eye-20-20.svg';
import { Card } from '@/shared/ui/deprecated/Card';
import { Avatar } from '@/shared/ui/deprecated/Avatar';
import { Button } from '@/shared/ui/deprecated/Button';
import { AppLink } from '@/shared/ui/deprecated/AppLink';
import {
    ArticleBlockTypes,
    ArticleView,
} from '../../model/consts/articleConsts';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';
import cls from './ArticleListItem.module.scss';
import { Article, ArticleTextBlock } from '../../model/types/article';
import { getRouteArticleDetails } from '@/shared/const/router';
import { AppImage } from '@/shared/ui/redesigned/AppImage';
import { Skeleton } from '@/shared/ui/deprecated/Skeleton';

interface ArticleListItemProps {
    className?: string;
    article: Article;
    view: ArticleView;
    target?: HTMLAttributeAnchorTarget;
}

export const ArticleListItem = memo((props: ArticleListItemProps) => {
    const { className, article, view, target } = props;
    const { t } = useTranslation('articleListItem');

    const date = <Text className={cls.date} text={article.createdAt} />;

    const title = <Text className={cls.title} title={article.title} />;

    const types = <Text className={cls.types} text={article.type.join(', ')} />;

    const views = (
        <>
            <Text className={cls.views} text={String(article.views)} />
            <Icon Svg={EyeIcon} />
        </>
    );

    if (view === ArticleView.LIST) {
        const textBlock = article.blocks.find(
            (block) => block.type === ArticleBlockTypes.TEXT,
        ) as ArticleTextBlock;

        return (
            <div
                className={cn('', {}, [className, cls[view]])}
                data-testid="ArticleListItem"
            >
                <Card>
                    <div className={cls.header}>
                        <Avatar
                            src={article.user.avatar}
                            size={30}
                            alt={article.user.username}
                        />
                        <Text
                            className={cls.username}
                            text={article.user.username}
                        />
                        {date}
                    </div>

                    {title}
                    {types}
                    <AppImage
                        fallback={<Skeleton width="100%" height={250} />}
                        className={cls.img}
                        src={article.img}
                        alt={article.title}
                    />

                    {textBlock && (
                        <ArticleTextBlockComponent
                            className={cls.textBlock}
                            block={textBlock}
                        />
                    )}

                    <div className={cls.footer}>
                        <AppLink
                            to={getRouteArticleDetails(article.id)}
                            target={target}
                        >
                            <Button>{t('Читать далее...')}</Button>
                        </AppLink>
                        {views}
                    </div>
                </Card>
            </div>
        );
    }

    return (
        <AppLink
            className={cn('', {}, [className, cls[view]])}
            to={getRouteArticleDetails(article.id)}
            target={target}
            data-testid="ArticleListItem"
        >
            <Card>
                <div className={cls.imageWrapper}>
                    <AppImage
                        fallback={<Skeleton width={200} height={200} />}
                        className={cls.img}
                        src={article.img}
                        alt={article.title}
                    />
                    {date}
                </div>

                <div className={cls.infoWrapper}>
                    {types}
                    {views}
                </div>

                {title}
            </Card>
        </AppLink>
    );
});
