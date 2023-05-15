import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Modal } from './Modal';
import { Theme } from '@/shared/const/theme';

export default {
    title: 'shared/Modal',
    component: Modal,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const ModalNormalTheme = Template.bind({});
ModalNormalTheme.args = {
    children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad blanditiis consequatur '
            + 'dignissimos esse explicabo fuga hic ipsam iste iure mollitia nisi optio praesentium quasi '
            + 'quia quo reprehenderit vero voluptas, voluptatibus!',
    isOpen: true,
};

export const ModalDarkTheme = Template.bind({});
ModalDarkTheme.args = {
    children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad blanditiis consequatur '
            + 'dignissimos esse explicabo fuga hic ipsam iste iure mollitia nisi optio praesentium quasi '
            + 'quia quo reprehenderit vero voluptas, voluptatibus!',
    isOpen: true,
};
ModalDarkTheme.decorators = [ThemeDecorator(Theme.DARK)];
