import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import avatar from 'shared/assets/tests/storybook.jpg';
import { CommentList } from './CommentList';

export default {
    title: 'entities/Comment/CommentList',
    component: CommentList,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof CommentList>;

const Template: ComponentStory<typeof CommentList> = (args) => <CommentList {...args} />;

export const Normal = Template.bind({});
Normal.args = {
    comments: [
        {
            id: '1',
            text: 'Первый комментарий',
            user: { id: '1', username: 'admin', avatar },
        },
        {
            id: '2',
            text: 'Второй комментарий',
            user: { id: '2', username: 'user', avatar },
        },
    ],
};

export const Loading = Template.bind({});
Loading.args = {
    comments: [],
    isLoading: true,
};
