import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import withMock from 'storybook-addon-mock';
import { NotificationList } from './NotificationList';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

export default {
    title: 'entities/Notification/NotificationList',
    component: NotificationList,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [withMock],
} as ComponentMeta<typeof NotificationList>;

const Template: ComponentStory<typeof NotificationList> = (args) => <NotificationList {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
Primary.decorators = [StoreDecorator({})];
Primary.parameters = {
    mockData: [
        {
            url: `${__API__}/notifications`,
            method: 'GET',
            status: 200,
            response: [
                {
                    id: '1',
                    title: 'title 1',
                    description: 'description 2',
                    userId: '1',
                    href: '',
                },
                {
                    id: '2',
                    title: 'title 2',
                    description: 'description 2',
                    userId: '1',
                    href: '',
                },
                {
                    id: '3',
                    title: 'title 3',
                    description: 'description 3',
                    userId: '1',
                    href: '',
                },
                {
                    id: '4',
                    title: 'title 4',
                    description: 'description 4',
                    userId: '1',
                    href: '',
                },
            ],
        },
    ],
};
