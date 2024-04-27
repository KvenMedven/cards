import { Typography } from "@/components/ui/Typography/Typography";
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
  component: Typography,
  parameters: {
    backgrounds: {
      default: "dark",
      values: [{ name: "dark", value: "#000" }],
    },
  },
  tags: ["autodocs"],
  title: "Components/Typography",
} satisfies Meta<typeof Typography>;

export default meta;

type Story = StoryObj<typeof meta>;
const text = `Carosserie Test Zürich
Stauffacherstrasse 31
8004 Zürich, ZH, CH`;

export const H1: Story = {
  args: {
    as: "h1",
    children: text,
    variant: "H1",
  },
};

export const H2: Story = {
  args: {
    as: "h2",
    children: text,
    variant: "H2",
  },
};

export const H3: Story = {
  args: {
    as: "h3",
    children: text,
    variant: "H3",
  },
};

export const H4: Story = {
  args: {
    as: "h4",
    children: text,
    variant: "H4",
  },
};
export const Body1: Story = {
  args: {
    children: text,
    variant: "Body1",
  },
};

export const Body2: Story = {
  args: {
    children: text,
    variant: "Body2",
  },
};
export const Subtitle1: Story = {
  args: {
    children: text,
    variant: "Subtitle1",
  },
};
export const Subtitle2: Story = {
  args: {
    children: text,
    variant: "Subtitle2",
  },
};

export const Caption: Story = {
  args: {
    children: text,
    variant: "Caption",
  },
};

export const Overline: Story = {
  args: {
    children: text,
    variant: "Overline",
  },
};
export const Link1: Story = {
  args: {
    children: text,
    variant: "Link1",
  },
};

export const Link2: Story = {
  args: {
    children: text,
    variant: "Link2",
  },
};
