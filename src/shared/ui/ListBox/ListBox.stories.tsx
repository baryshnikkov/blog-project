import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ListBox } from './ListBox';

export default {
    title: 'shared/ListBox',
    component: ListBox,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ListBox>;

const Template: ComponentStory<typeof ListBox> = (args) => <ListBox {...args} />;

const options = [
    { value: 'value1', content: 'content1' },
    { value: 'value2', content: 'content2' },
    { value: 'value3', content: 'content3' },
    { value: 'value4', content: 'content4' },
    { value: 'value5', content: 'content5' },
];

export const Primary = Template.bind({});
Primary.args = {
    options,
    value: 'content4',
    onChange: () => {},
    label: 'Label',
};

export const Disabled = Template.bind({});
Disabled.args = {
    options,
    value: 'content4',
    onChange: () => {},
    readonly: true,
    label: 'Label',
};

export const WithDefaultValue = Template.bind({});
WithDefaultValue.args = {
    options,
    onChange: () => {},
    defaultValue: 'default',
    label: 'Label',
};

export const TopDirection = Template.bind({});
TopDirection.args = {
    options,
    onChange: () => {},
    value: 'content4',
    direction: 'top',
    label: 'Label',
};
