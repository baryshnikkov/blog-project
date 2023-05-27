import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Flex } from './Flex';

export default {
    title: 'shared/Stack',
    component: Flex,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Flex>;

const Template: ComponentStory<typeof Flex> = (args) => <Flex {...args} />;

export const RowGap4 = Template.bind({});
RowGap4.args = {
    children: (
        <>
            <div>one</div>
            <div>two</div>
            <div>three</div>
            <div>four</div>
            <div>five</div>
            <div>six</div>
            <div>seven</div>
        </>
    ),
};

export const RowGap4JustifyBetween = Template.bind({});
RowGap4JustifyBetween.args = {
    children: (
        <>
            <div>one</div>
            <div>two</div>
            <div>three</div>
            <div>four</div>
            <div>five</div>
            <div>six</div>
            <div>seven</div>
        </>
    ),
    justify: 'between',
};

export const RowGap8 = Template.bind({});
RowGap8.args = {
    children: (
        <>
            <div>one</div>
            <div>two</div>
            <div>three</div>
            <div>four</div>
            <div>five</div>
            <div>six</div>
            <div>seven</div>
        </>
    ),
    gap: '8',
};

export const RowGap16 = Template.bind({});
RowGap16.args = {
    children: (
        <>
            <div>one</div>
            <div>two</div>
            <div>three</div>
            <div>four</div>
            <div>five</div>
            <div>six</div>
            <div>seven</div>
        </>
    ),
    gap: '16',
};

export const RowGap32 = Template.bind({});
RowGap32.args = {
    children: (
        <>
            <div>one</div>
            <div>two</div>
            <div>three</div>
            <div>four</div>
            <div>five</div>
            <div>six</div>
            <div>seven</div>
        </>
    ),
    gap: '32',
};

export const ColumnGap4 = Template.bind({});
ColumnGap4.args = {
    children: (
        <>
            <div>one</div>
            <div>two</div>
            <div>three</div>
            <div>four</div>
            <div>five</div>
            <div>six</div>
            <div>seven</div>
        </>
    ),
    direction: 'column',
};

export const ColumnGap8 = Template.bind({});
ColumnGap8.args = {
    children: (
        <>
            <div>one</div>
            <div>two</div>
            <div>three</div>
            <div>four</div>
            <div>five</div>
            <div>six</div>
            <div>seven</div>
        </>
    ),
    direction: 'column',
    gap: '8',
};

export const ColumnGap8AlignStart = Template.bind({});
ColumnGap8AlignStart.args = {
    children: (
        <>
            <div>one</div>
            <div>two</div>
            <div>three</div>
            <div>four</div>
            <div>five</div>
            <div>six</div>
            <div>seven</div>
        </>
    ),
    direction: 'column',
    gap: '8',
    align: 'start',
};

export const ColumnGap8AlignEnd = Template.bind({});
ColumnGap8AlignEnd.args = {
    children: (
        <>
            <div>one</div>
            <div>two</div>
            <div>three</div>
            <div>four</div>
            <div>five</div>
            <div>six</div>
            <div>seven</div>
        </>
    ),
    direction: 'column',
    gap: '8',
    align: 'end',
};

export const ColumnGap16 = Template.bind({});
ColumnGap16.args = {
    children: (
        <>
            <div>one</div>
            <div>two</div>
            <div>three</div>
            <div>four</div>
            <div>five</div>
            <div>six</div>
            <div>seven</div>
        </>
    ),
    direction: 'column',
    gap: '16',
};

export const ColumnGap32 = Template.bind({});
ColumnGap32.args = {
    children: (
        <>
            <div>one</div>
            <div>two</div>
            <div>three</div>
            <div>four</div>
            <div>five</div>
            <div>six</div>
            <div>seven</div>
        </>
    ),
    direction: 'column',
    gap: '32',
};
