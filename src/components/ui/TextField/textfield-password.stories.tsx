import { TextField } from "@/components/ui/TextField/TextField";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
  argTypes: {
    variant: {
      control: { type: "radio" },
      options: ["search", "password", "text"],
    },
  },
  component: TextField,
  parameters: {
    backgrounds: {
      default: "dark",
      values: [{ name: "dark", value: "#000" }],
    },
  },
  tags: ["autodocs"],
  title: "Components/Textfield/Password",
} satisfies Meta<typeof TextField>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Input",
    placeholder: "Input",
    variant: "password",
  },
};
export const Focus: Story = {
  args: {
    autoFocus: true,
    label: "Input",
    placeholder: "Input",
    variant: "password",
  },
};

export const Error: Story = {
  args: {
    error: "Error!",
    label: "Input",
    placeholder: "Input",
    variant: "password",
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    label: "Input",
    placeholder: "Input",
    variant: "password",
  },
};
