import Button from ".";

import type {Meta, StoryObj} from "@storybook/react";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "Components/Button",
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    variant: "primary",
    children: "Button Primary",
    disabled: false,
  },
};
export const Secondary: Story = {
  args: {
    variant: "secondary",
    children: "Button Secondary",
    disabled: false,
  },
};
export const Tertiary: Story = {
  args: {
    variant: "tertiary",
    children: "Button Tertiary",
    disabled: false,
  },
};
export const Transparent: Story = {
  args: {
    variant: "transparent",
    children: "Button Transparent",
    disabled: false,
  },
};
export const Danger: Story = {
  args: {
    variant: "danger",
    children: "Button Danger",
    disabled: false,
  },
};
export const Link: Story = {
  args: {
    variant: "link",
    children: "Button Link",
    disabled: false,
  },
};
