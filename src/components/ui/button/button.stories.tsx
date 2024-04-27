import type { Meta, StoryObj } from "@storybook/react";

import { Vector } from "@/components/ui/button/Vector";

import { Button } from "./";

const meta = {
  argTypes: {
    variant: {
      control: { type: "radio" },
      options: ["primary", "secondary"],
    },
  },
  component: Button,
  parameters: {
    backgrounds: {
      default: "dark",
      values: [{ name: "dark", value: "#000" }],
    },
  },
  tags: ["autodocs"],
  title: "Components/Button",
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: "Button Primary",
    disabled: false,
    variant: "primary",
  },
};

export const PrimaryWithIcon: Story = {
  args: {
    children: (
      <>
        <Vector />
        Button primary
      </>
    ),
    variant: "primary",
  },
};

export const Secondary: Story = {
  args: {
    children: "Button Secondary",
    variant: "secondary",
  },
};
export const SecondaryWithIcon: Story = {
  args: {
    children: (
      <>
        <Vector />
        Button Secondary
      </>
    ),
    variant: "secondary",
  },
};

export const FullWidth: Story = {
  args: {
    children: "Full Width Primary Button",
    disabled: false,
    fullWidth: true,
    variant: "primary",
  },
};

export const LinkAsButton: Story = {
  args: {
    as: "a",
    children: "link as button",
    fullWidth: false,
    href: "https://google.com",
    target: "_blank",
    variant: "primary",
  },
};

export const LinkAsButton2: Story = {
  args: {
    children: "link as button",
    fullWidth: false,
    href: "https://google.com",
    target: "_blank",
    variant: "primary",
  },
};

export const LinkAsButton3: Story = {
  args: {
    children: "link as button",
    fullWidth: false,
    href: "https://google.com",
    target: "_blank",
    variant: "primary",
  },
};
