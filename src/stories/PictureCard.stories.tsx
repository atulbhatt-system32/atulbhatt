import { ComponentMeta, ComponentStory } from "@storybook/react";
import { PictureCard } from "../components";

export default {
  title: "Portfolio/PictureCard",
  component: PictureCard,
} as ComponentMeta<typeof PictureCard>;

const Template: ComponentStory<typeof PictureCard> = (args) => (
  <PictureCard {...args} />
);

export const IntroPictureCard = Template.bind({});
