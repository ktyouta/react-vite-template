import type { Meta, StoryObj } from '@storybook/react';
import { Signup } from './signup';

const meta: Meta<typeof Signup> = {
    title: 'Features/Signup',
    component: Signup,
    parameters: {
        layout: 'fullscreen',
    },
    args: {
        errMessage: '',
        yearCoomboList: [
            { label: '選択してください', value: '' },
            { label: '2000', value: '2000' },
            { label: '1999', value: '1999' },
            { label: '1998', value: '1998' },
        ],
        clickBack: () => {
            alert("戻るボタンが押されました");
        },
        isLoading: false,
        register: (() => ({
            name: 'name',
            onChange: async () => { },
            onBlur: async () => { },
            ref: () => { },
        })) as any,
        errors: {},
        handleConfirm: async () => {
            alert("登録ボタンが押されました");
        },
    },
};

export default meta;
type Story = StoryObj<typeof Signup>;

export const Default: Story = {};
