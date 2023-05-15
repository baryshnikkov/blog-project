import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Button, ButtonSize, ButtonTheme } from './Button';
import { Theme } from '@/shared/const/theme';

export default {
    title: 'shared/Button',
    component: Button,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: 'Text',
};

export const ClearTheme = Template.bind({});
ClearTheme.args = {
    children: 'Text',
    theme: ButtonTheme.CLEAR,
};

export const ClearInvertedTheme = Template.bind({});
ClearInvertedTheme.args = {
    children: 'Text',
    theme: ButtonTheme.CLEAR_INVERTED,
};

export const OutlinedTheme = Template.bind({});
OutlinedTheme.args = {
    children: 'Text',
    theme: ButtonTheme.OUTLINE,
};

export const OutlinedThemeSizeXL = Template.bind({});
OutlinedThemeSizeXL.args = {
    children: 'Text',
    theme: ButtonTheme.OUTLINE,
    size: ButtonSize.XL,
};

export const OutlinedThemeSizeL = Template.bind({});
OutlinedThemeSizeL.args = {
    children: 'Text',
    theme: ButtonTheme.OUTLINE,
    size: ButtonSize.L,
};

export const OutlinedThemeSizeM = Template.bind({});
OutlinedThemeSizeM.args = {
    children: 'Text',
    theme: ButtonTheme.OUTLINE,
    size: ButtonSize.M,
};

export const OutlinedThemeDark = Template.bind({});
OutlinedThemeDark.args = {
    children: 'Text',
    theme: ButtonTheme.OUTLINE,
};
OutlinedThemeDark.decorators = [ThemeDecorator(Theme.DARK)];

export const BackgroundTheme = Template.bind({});
BackgroundTheme.args = {
    children: 'Text',
    theme: ButtonTheme.BACKGROUND,
};

export const BackgroundInvertedTheme = Template.bind({});
BackgroundInvertedTheme.args = {
    children: 'Text',
    theme: ButtonTheme.BACKGROUND_INVERTED,
};

export const Square = Template.bind({});
Square.args = {
    children: '>',
    theme: ButtonTheme.BACKGROUND_INVERTED,
    square: true,
};

export const SquareSizeL = Template.bind({});
SquareSizeL.args = {
    children: '>',
    theme: ButtonTheme.BACKGROUND_INVERTED,
    square: true,
    size: ButtonSize.L,
};

export const SquareSizeM = Template.bind({});
SquareSizeM.args = {
    children: '>',
    theme: ButtonTheme.BACKGROUND_INVERTED,
    square: true,
    size: ButtonSize.M,
};

export const SquareSizeXL = Template.bind({});
SquareSizeXL.args = {
    children: '>',
    theme: ButtonTheme.BACKGROUND_INVERTED,
    square: true,
    size: ButtonSize.XL,
};

export const DisabledBtn = Template.bind({});
DisabledBtn.args = {
    children: 'text',
    theme: ButtonTheme.OUTLINE,
    disabled: true,
};
