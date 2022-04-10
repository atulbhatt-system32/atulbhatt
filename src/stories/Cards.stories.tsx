import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Cards } from "../components/index";
import styles from "../components/Cards/Cards.module.css";

export default {
  title: "Portfolio/Cards",
  component: Cards,
} as ComponentMeta<typeof Cards>;

const template: ComponentStory<typeof Cards> = (args) => <Cards {...args} />;

export const basicCard = template.bind({});
export const curvedCard = template.bind({});
export const ProjectCard = template.bind({});
basicCard.args = {
  title: "Basic Card",
};

curvedCard.args = {
  title: "Basic Card",
  variant: "curved",
};

ProjectCard.args = {
  title: "Project Card",
  variant: "curved",
  purpose: "project",
  children: <div className={styles.children_wrapper}></div>,
};
