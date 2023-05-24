import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { CommentList } from './CommentList';

export default {
    title: 'entities/Comment/CommentList',
    component: CommentList,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof CommentList>;

const Template: ComponentStory<typeof CommentList> = (args) => (
    <CommentList {...args} />
);

const comments = [
    {
        id: '1',
        text: 'Hello, World!',
        user: {
            id: '1',
            username: 'user1',
            features: {
                isCounterEnabled: true,
                isArticleRatingEnabled: true,
            },
        },
    },
    {
        id: '2',
        text: 'Hello!',
        user: {
            id: '2',
            username: 'user2',
            features: {
                isCounterEnabled: true,
                isArticleRatingEnabled: true,
            },
        },
    },
];

export const Primary = Template.bind({});
Primary.args = {
    comments,
};

export const Loading = Template.bind({});
Loading.args = {
    comments,
    isLoading: true,
};
