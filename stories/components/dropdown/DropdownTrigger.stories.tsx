import type { Meta, StoryObj } from "@storybook/react";

import { DropdownTrigger } from "@/components/dropdown";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Components/Dropdown/DropdownTrigger",
  component: DropdownTrigger,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  // tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    selectedOption: { control: "text", defaultValue: "Base" },
    expanded: { control: "boolean", defaultValue: false },
  },
} satisfies Meta<typeof DropdownTrigger>;

export default meta;

type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Small: Story = {
  args: {
    title: "Network",
    expanded: false,
    selectedOption: "Base",
  },
};
