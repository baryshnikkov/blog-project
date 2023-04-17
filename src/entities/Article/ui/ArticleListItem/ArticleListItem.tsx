import { classNames } from 'shared/lib/classNames/classNames';
import { memo, useCallback } from 'react';
import { Text } from 'shared/ui/Text/Text';
import { Icon } from 'shared/ui/Icon/Icon';
import EyeIcon from 'shared/assets/icons/eye-20-20.svg';
import { Card } from 'shared/ui/Card/Card';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Button } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';
import cls from './ArticleListItem.module.scss';
import {
    Article, ArticleBlockTypes, ArticleTextBlock, ArticleView,
} from '../../model/types/article';

interface ArticleListItemProps {
    className?: string;
    article: Article;
    view: ArticleView;
}

export const ArticleListItem = memo((props: ArticleListItemProps) => {
    const {
        className,
        article,
        view,
    } = props;
    const { t } = useTranslation('articleListItem');
    const navigate = useNavigate();

    const onOpenArticle = useCallback(() => {
        navigate(RoutePath.article_details + article.id);
    }, [article.id, navigate]);

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
                        <Button onClick={onOpenArticle}>
                            {t('Читать далее...')}
                        </Button>
                        {views}
                    </div>
                </Card>
            </div>
        );
    }

    return (
        <div className={classNames('', {}, [className, cls[view]])}>
            <Card onClick={onOpenArticle}>
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
        </div>
    );
});
