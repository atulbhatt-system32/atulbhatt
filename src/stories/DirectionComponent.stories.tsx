import { ComponentMeta, ComponentStory } from "@storybook/react";
import { DirectionElement } from "components";

export default {
  title: "Portfolio/DirectionElement",
  component: DirectionElement,
} as ComponentMeta<typeof DirectionElement>;

const Template: ComponentStory<typeof DirectionElement> = (args) => (
  <DirectionElement {...args} />
);

export const basic = Template.bind({});

basic.args = {
  variant: "circular",
};
