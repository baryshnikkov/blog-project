import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Button } from '../../../Button/Button';
import { Dropdown } from './Dropdown';

export default {
    title: 'shared/Dropdown',
    component: Dropdown,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [
        (Story) => (
            <div style={{
                paddingTop: 200,
                paddingLeft: 100,
                paddingBottom: 200,
                width: 'min-content',
            }}
            >
                <Story />
            </div>
        ),
    ],
} as ComponentMeta<typeof Dropdown>;

const Template: ComponentStory<typeof Dropdown> = (args) => <Dropdown {...args} />;

export const TopLeft = Template.bind({});
TopLeft.args = {
    trigger: <Button>Open</Button>,
    items: [
        { content: 'one' },
        { content: 'two' },
        { content: 'three' },
    ],
    direction: 'top left',
};
export const TopRight = Template.bind({});
TopRight.args = {
    trigger: <Button>Open</Button>,
    items: [
        { content: 'one' },
        { content: 'two' },
        { content: 'three' },
    ],
    direction: 'top right',
};
export const BottomLeft = Template.bind({});
BottomLeft.args = {
    trigger: <Button>Open</Button>,
    items: [
        { content: 'one' },
        { content: 'two' },
        { content: 'three' },
    ],
    direction: 'bottom left',
};
export const BottomRight = Template.bind({});
BottomRight.args = {
    trigger: <Button>Open</Button>,
    items: [
        { content: 'one' },
        { content: 'two' },
        { content: 'three' },
    ],
    direction: 'bottom right',
};
