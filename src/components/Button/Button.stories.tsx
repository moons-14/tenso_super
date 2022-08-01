import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Button } from "./Button";

export default {
  title: "Element/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => (
  <Button {...args}>Hello World</Button>
);

export const normal = Template.bind({});
normal.args = {
  children: "Hello World",
  color: "normal",
};

export const primary = Template.bind({});
primary.args = {
  children: "Hello World",
  color: "primary",
};

export const secondary = Template.bind({});
secondary.args = {
  children: "Hello World",
  color: "secondary",
};
