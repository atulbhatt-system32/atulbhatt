import { ComponentStory, ComponentMeta } from "@storybook/react";
import { CTA } from "components";
import { InstagramLogo } from "assets/svgs";

export default {
  title: "Portfolio/CTA",
  component: CTA,
} as ComponentMeta<typeof CTA>;

const Template: ComponentStory<typeof CTA> = (args) => <CTA {...args} />;

export const circularVariant = Template.bind({});
export const squareVariant = Template.bind({});
export const roundedVariant = Template.bind({});
export const filledVariant = Template.bind({});

circularVariant.args = {
  icon: InstagramLogo(),
  variant: "circular",
};

squareVariant.args = {
  icon: InstagramLogo(),
  variant: "square",
};
roundedVariant.args = {
  icon: InstagramLogo(),
  variant: "rounded",
};

filledVariant.args = {
  icon: InstagramLogo(),
  variant: "circular",
  filled: true,
};
