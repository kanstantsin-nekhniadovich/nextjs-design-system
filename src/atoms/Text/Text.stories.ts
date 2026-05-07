import type { Meta, StoryObj } from "@storybook/react-vite";
import { Text } from "./Text";

const meta = {
  title: "Atoms/Text",
  component: Text,
  args: {
    children: "Build consistent interfaces with reusable typography.",
    variant: "body",
    color: "primary",
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["h1", "h2", "h3", "lead", "body", "small", "caption"],
    },
    color: {
      control: "inline-radio",
      options: ["primary", "secondary", "muted", "accent", "inverse"],
    },
  },
} satisfies Meta<typeof Text>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const HeroHeading: Story = {
  args: {
    variant: "h1",
    children: "Design system foundations",
  },
};

export const SectionHeading: Story = {
  args: {
    variant: "h2",
    children: "Composable primitives",
  },
};

export const LeadCopy: Story = {
  args: {
    variant: "lead",
    children: "A small set of atoms can carry a lot of product surface area.",
  },
};

export const MutedBody: Story = {
  args: {
    color: "muted",
    children: "Secondary text can stay readable without competing for attention.",
  },
};

export const Timestamp: Story = {
  args: {
    as: "time",
    variant: "caption",
    color: "secondary",
    children: "Updated 7 May 2026",
  },
};
