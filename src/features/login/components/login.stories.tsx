import type { Meta, StoryObj } from '@storybook/react';
import { Login } from './login';

const meta: Meta<typeof Login> = {
    title: 'Features/Login',
    component: Login,
    parameters: {
        layout: 'centered',
    },
    args: {
        errMessage: '',
        isLoading: false,
        register: (() => ({
            name: 'name',
            onChange: async () => { },
            onBlur: async () => { },
            ref: () => { },
        })) as any,
        errors: {},
        clickLogin: async () => {
            alert("ログインボタンが押されました");
        },
    },
};

export default meta;
type Story = StoryObj<typeof Login>;

export const Default: Story = {};
