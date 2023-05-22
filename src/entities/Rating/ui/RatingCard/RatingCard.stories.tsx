import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { RatingCard } from './RatingCard';

export default {
    title: 'entities/RatingCard',
    component: RatingCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof RatingCard>;

const Template: ComponentStory<typeof RatingCard> = (args) => (
    <RatingCard {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
    title: 'title',
    feedbackTitle: 'feedback title',
    hasFeedback: true,
    onCancel: () => null,
    onAccept: () => null,
    rate: 0,
};

export const PrimaryWithRate = Template.bind({});
PrimaryWithRate.args = {
    title: 'title',
    feedbackTitle: 'feedback title',
    hasFeedback: true,
    onCancel: () => null,
    onAccept: () => null,
    rate: 3,
};
