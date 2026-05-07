import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "./Button";

const meta = {
	title: "Atoms/Button",
	component: Button,
	args: {
		children: "Button",
		variant: "primary",
		size: "md",
		disabled: false,
	},
	argTypes: {
		variant: {
			control: "inline-radio",
			options: ["primary", "secondary", "ghost"],
		},
		size: {
			control: "inline-radio",
			options: ["sm", "md", "lg"],
		},
	},
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const Secondary: Story = {
	args: {
		variant: "secondary",
	},
};

export const Ghost: Story = {
	args: {
		variant: "ghost",
	},
};

export const Large: Story = {
	args: {
		size: "lg",
		children: "Primary action",
	},
};

export const Disabled: Story = {
	args: {
		disabled: true,
	},
};
