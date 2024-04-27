import { TextField } from "@/components/ui/TextField/TextField";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
  argTypes: {
    variant: {
      control: { type: "radio" },
      options: [
        "Body1",
        "Body2",
        "Caption",
        "H1",
        "H2",
        "H3",
        "H4",
        "Link1",
        "Link2",
        "Overline",
        "Subtitle1",
        "Subtitle2",
      ],
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
