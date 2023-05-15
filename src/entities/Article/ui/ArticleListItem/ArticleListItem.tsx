import { HTMLAttributeAnchorTarget, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text } from '@/shared/ui/Text';
import { Icon } from '@/shared/ui/Icon';
import EyeIcon from '@/shared/assets/icons/eye-20-20.svg';
import { Card } from '@/shared/ui/Card';
import { Avatar } from '@/shared/ui/Avatar';
import { Button } from '@/shared/ui/Button';
import { AppLink } from '@/shared/ui/AppLink';
import { ArticleBlockTypes, ArticleView } from '../../model/consts/articleConsts';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';
import cls from './ArticleListItem.module.scss';
import { Article, ArticleTextBlock } from '../../model/types/article';
import { RoutePath } from '@/shared/const/router';

interface ArticleListItemProps {
    className?: string;
    article: Article;
    view: ArticleView;
    target?: HTMLAttributeAnchorTarget;
}

export const ArticleListItem = memo((props: ArticleListItemProps) => {
    const {
        className,
        article,
        view,
        target,
    } = props;
    const { t } = useTranslation('articleListItem');

    const date = (
        <Text
            className={cls.date}
            text={article.createdAt}
        />
    );

    const title = (
        <Text
            className={cls.title}
            title={article.title}
        />
    );

    const types = (
        <Text
            className={cls.types}
            text={article.type.join(', ')}
        />
    );

    const views = (
        <>
            <Text
                className={cls.views}
                text={String(article.views)}
            />
            <Icon
                Svg={EyeIcon}
            />
        </>
    );

    const img = (
        <img
            className={cls.img}
            src={article.img}
            alt={article.title}
        />
    );

    if (view === ArticleView.LIST) {
        const textBlock = article.blocks.find((block) => block.type === ArticleBlockTypes.TEXT) as ArticleTextBlock;

        return (
            <div className={classNames('', {}, [className, cls[view]])}>
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
                    {img}

                    {textBlock && (
                        <ArticleTextBlockComponent
                            className={cls.textBlock}
                            block={textBlock}
                        />
                    )}

                    <div className={cls.footer}>
                        <AppLink
                            to={RoutePath.article_details + article.id}
                            target={target}
                        >
                            <Button>
                                {t('Читать далее...')}
                            </Button>
                        </AppLink>
                        {views}
                    </div>
                </Card>
            </div>
        );
    }

    return (
        <AppLink
            className={classNames('', {}, [className, cls[view]])}
            to={RoutePath.article_details + article.id}
            target={target}
        >
            <Card>
                <div className={cls.imageWrapper}>
                    {img}
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
