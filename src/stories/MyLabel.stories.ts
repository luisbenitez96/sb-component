import { Meta, StoryObj } from "@storybook/react-vite";
import { MyLabel, type Props } from "../components/MyLabel";

const meta: Meta<Props> = {
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
} satisfies Meta<typeof MyLabel>; // satisfies es una forma de asegurarse de que el objeto cumple con la interfaz Meta, la interfaz Meta es una interfaz de TypeScript que describe la forma de un objeto que representa la metadata de un componente de Storybook. Esto permite a TypeScript verificar que el objeto cumple con la forma esperada y proporciona autocompletado y verificación de tipos en el editor.

export default meta;
type Story = StoryObj<typeof MyLabel>; // StoryObj es una interfaz de TypeScript que describe la forma de un objeto que representa una historia de Storybook. Esto permite a TypeScript verificar que el objeto cumple con la forma esperada y proporciona autocompletado y verificación de tipos en el editor, se hace el type story de la historia de MyLabel.
// Story es un alias para StoryObj<typeof MyLabel>, lo que significa que Story es un tipo de objeto que representa una historia de Storybook para el componente MyLabel. Esto permite a TypeScript verificar que el objeto cumple con la forma esperada y proporciona autocompletado y verificación de tipos en el editor.

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
  },
};
export const CustomBackgroundColor: Story = {
  args: {
    size: "h1",
    fontColor: "#271c1c",
    backgroundColor: "#000000",
  },
};
