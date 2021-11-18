import { WclLink } from "../lib-components";

import { Meta, Story } from "@storybook/vue";

const base: Meta<typeof WclLink> = {
  title: "ui/Link",
  component: WclLink,
  argTypes: {
    type: {
      options: ["normal", "primary", "success", "info", "warning", "danger"],
      control: { type: "select" },
      description: "Color of Link Text",
    },
    underline: {
      control: { type: "boolean" },
    },
    href: {
      control: { type: "text" },
    },
    target: {
      control: {
        options: ["_self", "_blank"],
        control: { type: "select" },
        description: "link Target",
      },
    },
    disabled: {
      control: { type: "boolean" },
    },
  },
};

const template: Story = (_, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { WclLink },
  template: '<WclLink v-bind="$props">Label</WclLink>',
});

export const basic = template.bind({});

basic.args = {
  type: "normal",
  underline: true,
  href: "",
  target: "_self",
  disabled: false,
};

export default base;
