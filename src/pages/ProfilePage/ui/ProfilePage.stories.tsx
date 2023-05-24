import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { Currency } from '@/entities/Currency';
import { Country } from '@/entities/Country';
import ProfilePage from './ProfilePage';
import { Theme } from '@/shared/const/theme';

export default {
    title: 'pages/ProfilePage',
    component: ProfilePage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ProfilePage>;

const Template: ComponentStory<typeof ProfilePage> = () => <ProfilePage />;

export const Light = Template.bind({});
Light.args = {};
Light.decorators = [
    StoreDecorator({
        profile: {
            form: {
                first: 'Tom',
                lastname: 'Brown',
                age: 33,
                currency: Currency.RUB,
                country: Country.Russia,
                city: 'Moscow',
                username: 'admin',
                avatar: 'https://i.pinimg.com/736x/21/20/b0/2120b058cb9946e36306778243eadae5.jpg',
            },
        },
    }),
];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({
        profile: {
            form: {
                first: 'Tom',
                lastname: 'Brown',
                age: 33,
                currency: Currency.RUB,
                country: Country.Russia,
                city: 'Moscow',
                username: 'admin',
                avatar: 'https://i.pinimg.com/736x/21/20/b0/2120b058cb9946e36306778243eadae5.jpg',
            },
        },
    }),
];
