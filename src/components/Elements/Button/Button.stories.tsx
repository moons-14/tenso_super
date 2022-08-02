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
  rounded: "full",
  shadow: "sm",
  variant: "normal",
};

export const primary = Template.bind({});
primary.args = {
  ...normal.args,
  variant: "primary",
};

export const secondary = Template.bind({});
secondary.args = {
  ...normal.args,
  variant: "secondary",
};

export const info = Template.bind({});
info.args = {
  ...normal.args,
  variant: "info",
};

export const warn = Template.bind({});
warn.args = {
  ...normal.args,
  variant: "warn",
};

export const error = Template.bind({});
error.args = {
  children: "Hello World",
  variant: "error",
};
