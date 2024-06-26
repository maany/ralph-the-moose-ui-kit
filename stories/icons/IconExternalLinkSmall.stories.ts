import type { Meta, StoryObj } from "@storybook/react";

import { IconExternalLinkSmall } from "@/components/icons";

const meta = {
  title: "Icons/ExternalLinkSmall",
  component: IconExternalLinkSmall,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    fill: {
      control: "text",
      description: "The tailwind fill color for the icon.",
    },
  },
} as Meta<typeof IconExternalLinkSmall>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
