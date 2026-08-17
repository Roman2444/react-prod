import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Article, ArticleView } from 'entities/Article';
import { ArticleType } from 'entities/Article/model/types/article';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import avatar from 'shared/assets/tests/storybook.jpg';
import ArticlesPage from './ArticlesPage';

export default {
    title: 'pages/ArticlesPage',
    component: ArticlesPage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticlesPage>;

const Template: ComponentStory<typeof ArticlesPage> = (args) => <ArticlesPage {...args} />;

const article: Article = {
    id: '1',
    title: 'Javascript news',
    subtitle: 'Что нового в JS за 2022 год?',
    img: avatar,
    views: 1022,
    createdAt: '26.02.2022',
    type: [ArticleType.IT],
    user: {
        id: '1',
        username: 'Ulbi tv',
        avatar,
    },
    blocks: [],
};

const articles = new Array(9)
    .fill(0)
    .map((_, index) => ({
        ...article,
        id: String(index),
    }));

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [StoreDecorator({
    articlesPage: {
        ids: articles.map((item) => item.id),
        entities: articles.reduce((acc, item) => {
            acc[item.id] = item;
            return acc;
        }, {} as Record<string, Article>),
        isLoading: false,
        view: ArticleView.SMALL,
    },
})];
