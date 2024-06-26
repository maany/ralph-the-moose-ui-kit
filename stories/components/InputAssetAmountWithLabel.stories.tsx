import type { Meta, StoryObj } from "@storybook/react";

import { InputAssetAmountWithLabel } from "@/components/input-asset-amount-with-label";
import { RalphLogo } from "@/components/ralph-logo";

const meta = {
  title: "Components/InputAssetAmountWithLabel",
  component: InputAssetAmountWithLabel,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof InputAssetAmountWithLabel>;

export default meta;

type Story = StoryObj<typeof meta>;

const ralphIcon = <RalphLogo variant="icon" />;
export const Ralph: Story = {
  args: {
    label: "Amount to bridge",
    maxAmount: 100,
    errorMessage: "You ain't got enough tokens!",
    icon: ralphIcon,
    initialAmount: 1000,
    tokenShortName: "PR",
    onChange: (value: number) => {
      console.log(value);
    }, // Add the onChange property here
  },
};
export const BurgerToken: Story = {
  args: {
    maxAmount: 100,
    icon: "🍔",
    initialAmount: 100,
    tokenShortName: "PR",
    onChange: (value: number) => {
      console.log(value);
    }, // Add the onChange property here
  },
};
