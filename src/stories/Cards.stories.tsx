import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Cards } from "../components/index";

export default {
  title: "Portfolio/Cards",
  component: Cards,
} as ComponentMeta<typeof Cards>;

const template: ComponentStory<typeof Cards> = (args) => <Cards {...args} />;

export const basicCard = template.bind({});
export const curvedCard = template.bind({});
basicCard.args = {
  title: "Basic Card",
};

curvedCard.args = {
  title: "Basic Card",
  variant: "curved",
};
