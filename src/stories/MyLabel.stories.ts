import { Meta, StoryObj } from "@storybook/react-vite";
import { MyLabel } from "../components/MyLabel";

const meta = {
  title: "UI/labels/MyLabel",
  component: MyLabel,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    size: { control: "inline-radio" },
    color: {
      control: "select",
      options: ["text-primary", "text-secondary", "text-tertiary"],
    },
  },
} satisfies Meta<typeof MyLabel>;

export default meta;
type Story = StoryObj<typeof MyLabel>;

export const Basic: Story = {
  args: {
    label: "Basic Label ",
  },
};

export const AllCaps: Story = {
  args: {
    label: "All Caps Label ",
    AllCaps: true,
  },
};
export const SecondaryLabel: Story = {
  args: {
    label: "Secondary Label",
    color: "text-secondary",
  },
};
export const CustomColor: Story = {
  args: {
    label: "Custom Color Label",
    fontColor: "#5517ac",
    color: "text-tertiary"
  },
};
