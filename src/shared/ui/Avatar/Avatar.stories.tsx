import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import AvatarImg from 'shared/assets/tests/storybook.png';
import { Avatar } from './Avatar';

export default {
    title: 'shared/Avatar',
    component: Avatar,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const PrimaryAvatar = Template.bind({});
PrimaryAvatar.args = {
    src: AvatarImg,
    size: 150,
};

export const SmallAvatar = Template.bind({});
SmallAvatar.args = {
    src: AvatarImg,
    size: 50,
};
