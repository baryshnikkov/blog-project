import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ListBox } from './ListBox';

export default {
    title: 'shared/Popups/ListBox',
    component: ListBox,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [
        (Story) => (
            <div
                style={{
                    paddingTop: 300,
                    paddingLeft: 100,
                    paddingBottom: 300,
                }}
            >
                <Story />
            </div>
        ),
    ],
} as ComponentMeta<typeof ListBox>;

const Template: ComponentStory<typeof ListBox> = (args) => (
    <ListBox {...args} />
);

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

export const TopLeftDirection = Template.bind({});
TopLeftDirection.args = {
    options,
    onChange: () => {},
    value: 'content4',
    direction: 'top left',
    label: 'Label',
};

export const TopRightDirection = Template.bind({});
TopRightDirection.args = {
    options,
    onChange: () => {},
    value: 'content4',
    direction: 'top right',
    label: 'Label',
};

export const BottomLeftDirection = Template.bind({});
BottomLeftDirection.args = {
    options,
    onChange: () => {},
    value: 'content4',
    direction: 'bottom left',
    label: 'Label',
};

export const BottomRightDirection = Template.bind({});
BottomRightDirection.args = {
    options,
    onChange: () => {},
    value: 'content4',
    direction: 'bottom right',
    label: 'Label',
};
