import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import cls from './ArticleList.module.scss';
import { Article, ArticleView } from '../../model/types/article';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';

interface ArticleListProps {
    className?: string;
    articleList: Article[]
    isLoading?: boolean
    articleView?: ArticleView
}

export const ArticleList = memo((props: ArticleListProps) => {
    const {
        className, articleList, isLoading, articleView = ArticleView.SMALL,
    } = props;
    const { t } = useTranslation();

    const renderArticle = (article: Article) => (
        <ArticleListItem
            key={article.id}
            article={article}
            articleView={articleView}
        />
    );

    return (
        <div className={classNames(cls.ArticleList, {}, [className])}>
            { articleList.length > 0
                ? articleList.map(renderArticle)
                : null}
        </div>
    );
});
