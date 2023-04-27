import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import AvatarImg from 'shared/assets/tests/storybook.png';
import { ProfileCard } from './ProfileCard';

export default {
    title: 'entities/ProfileCard',
    component: ProfileCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => <ProfileCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    data: {
        first: 'Tom',
        lastname: 'Brown',
        age: 33,
        currency: Currency.RUB,
        country: Country.Russia,
        city: 'Moscow',
        username: 'admin',
        avatar: AvatarImg,
    },
};

export const WithError = Template.bind({});
WithError.args = {
    error: 'error text',
};

export const Loading = Template.bind({});
Loading.args = {
    isLoading: true,
};
