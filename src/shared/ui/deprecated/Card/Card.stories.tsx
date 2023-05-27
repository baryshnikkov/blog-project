import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Card } from './Card';
import { Text } from '../Text/Text';
import { Theme } from '@/shared/const/theme';

export default {
    title: 'shared/Card',
    component: Card,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    // eslint-disable-next-line
    children: <Text title="Title test" text="Text test" />,
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
    // eslint-disable-next-line
    children: <Text title="Title test" text="Text test" />,
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];
