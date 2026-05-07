import { createElement } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Link } from "./Link";

const meta = {
  title: "Atoms/Link",
  component: Link,
  args: {
    children: "Read more",
    href: "#",
    variant: "default",
    asChild: false,
  },
  argTypes: {
    variant: {
      control: "inline-radio",
      options: ["default", "subtle", "muted", "unstyled"],
    },
  },
} satisfies Meta<typeof Link>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const Subtle: Story = {
  args: {
    variant: "subtle",
  },
};

export const Muted: Story = {
  args: {
    variant: "muted",
  },
};

export const Unstyled: Story = {
  args: {
    variant: "unstyled",
  },
};

export const External: Story = {
  args: {
    children: "Visit Storybook",
    href: "https://storybook.js.org",
    target: "_blank",
    rel: "noreferrer",
  },
};

export const AsChild: Story = {
  args: {
    asChild: true,
    href: "/docs",
    children: "Documentation",
    variant: "default",
  },
  render: (args) =>
    createElement(
      Link,
      args,
      createElement("a", { href: args.href }, args.children)
    ),
};
