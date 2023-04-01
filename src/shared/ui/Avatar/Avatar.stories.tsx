import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Avatar } from './Avatar';
import AvatarImg from './storybook.png';

export default {
    title: 'shared/Avatar',
    component: Avatar,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const DefaultAvatar = Template.bind({});
DefaultAvatar.args = {
    src: AvatarImg,
    size: 150,
};

export const SmallAvatar = Template.bind({});
SmallAvatar.args = {
    src: AvatarImg,
    size: 50,
};
