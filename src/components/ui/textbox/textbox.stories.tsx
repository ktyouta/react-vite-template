import type { Meta, StoryObj } from "@storybook/react";
import { Textbox } from "./textbox";

const meta: Meta<typeof Textbox> = {
    title: "Components/Textbox",
    component: Textbox,
    args: {
        registration: {},
        placeholder: "入力してください",
    },
};

export default meta;

type Story = StoryObj<typeof Textbox>;

export const Default: Story = {};

export const Disabled: Story = {
    args: {
        disabled: true,
    },
};

export const Password: Story = {
    args: {
        type: "password",
        placeholder: "password",
    },
};
