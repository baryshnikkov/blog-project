import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { AvatarDropdown } from './AvatarDropdown';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { UserRoles } from '@/entities/User';
import AvatarImg from '@/shared/assets/tests/avatar.png';

export default {
    title: 'features/AvatarDropdown',
    component: AvatarDropdown,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [
        (Story) => (
            <div style={{
                display: 'flex',
                justifyContent: 'flex-end',
            }}
            >
                <Story />
            </div>
        ),
    ],
} as ComponentMeta<typeof AvatarDropdown>;

const Template: ComponentStory<typeof AvatarDropdown> = (args) => <AvatarDropdown {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
Primary.decorators = [StoreDecorator({
    user: {
        authData: {
            id: '1',
            username: 'username',
            roles: [UserRoles.ADMIN],
            avatar: AvatarImg,
        },
    },
})];
