import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import cls from './ArticleListItem.module.scss';
import { Article, ArticleView } from '../../model/types/article';

export interface ArticleListItemProps {
    className?: string;
    article: Article;
    articleView?: ArticleView
}

export const ArticleListItem = memo((props: ArticleListItemProps) => {
    const { className, article, articleView } = props;
    const { t } = useTranslation();

    if (articleView === ArticleView.BIG) {
        return (
            <div className={classNames(cls.ArticleListItem, {}, [className])}>
                <p>{article.title}</p>
            </div>
        );
    }
    return (
        <div className={classNames(cls.ArticleList, {}, [className])}>
            <p>{article.title}</p>
            <p>{article.createdAt}</p>
        </div>
    );
});
