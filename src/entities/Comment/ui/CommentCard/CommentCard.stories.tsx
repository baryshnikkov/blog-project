import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { CommentCard } from './CommentCard';

export default {
    title: 'entities/Comment/CommentCard',
    component: CommentCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof CommentCard>;

const Template: ComponentStory<typeof CommentCard> = (args) => (
    <CommentCard {...args} />
);

const comment = {
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
};

export const Primary = Template.bind({});
Primary.args = {
    comment,
};

export const Loading = Template.bind({});
Loading.args = {
    comment,
    isLoading: true,
};
