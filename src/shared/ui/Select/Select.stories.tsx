import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';
import { Select } from './Select';

export default {
    title: 'shared/Select',
    component: Select,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

export const PrimarySelect = Template.bind({});
PrimarySelect.args = {
    label: 'Укажите значение',
    options: [
        { value: '1', content: 'Первый элемент' },
        { value: '2', content: 'Второй элемент' },
        { value: '3', content: 'Третий элемент' },
        { value: '4', content: 'Четвертый элемент' },
        { value: '5', content: 'Пятый элемент' },
    ],
};

export const PrimarySelectDark = Template.bind({});
PrimarySelectDark.args = {
    label: 'Укажите значение',
    options: [
        { value: '1', content: 'Первый элемент' },
        { value: '2', content: 'Второй элемент' },
        { value: '3', content: 'Третий элемент' },
        { value: '4', content: 'Четвертый элемент' },
        { value: '5', content: 'Пятый элемент' },
    ],
};
PrimarySelectDark.decorators = [ThemeDecorator(Theme.DARK)];
