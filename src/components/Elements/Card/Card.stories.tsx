import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Card } from "./Card";

export default {
  title: "Element/Card",
  components: Card,
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args}></Card>;

export const Default = Template.bind({});

Default.args = {
  shadow: "md",
  variant: "normal",
  className: "w-24 h-36",
};
