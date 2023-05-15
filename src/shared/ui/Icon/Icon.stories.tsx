import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import iconForTest from '@/shared/assets/tests/iconForTest.svg';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Icon } from './Icon';
import { Theme } from '@/shared/const/theme';

export default {
    title: 'shared/Icon',
    component: Icon,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    Svg: iconForTest,
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
    Svg: iconForTest,
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];
