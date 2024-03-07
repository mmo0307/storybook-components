import {Meta, StoryObj} from "@storybook/react";
import {Animation} from "./index.tsx";

const meta = {
    title: "animations/animation_1",
    component: Animation
} satisfies Meta<typeof Animation>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Story: Story = {
    name: "Default",
    args: {}
};
