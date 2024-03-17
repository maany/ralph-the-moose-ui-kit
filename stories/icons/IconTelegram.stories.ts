import type { Meta, StoryObj } from "@storybook/react";

import { IconTelegram } from "@/components/icons";

const meta = {
  title: "Icons/Telegram",
  component: IconTelegram,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    fill: {
      control: "text",
      description: "The tailwind fill color for the icon.",
    },
    size: {
      control: "number",
      description: "The height and width of the svg icon.",
    },
  },
  tags: ["autodocs"],
} as Meta<typeof IconTelegram>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    fill: "base-colors/neutral-900",
    size: 12,
  },
};
