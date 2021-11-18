import { Meta, Story } from "@storybook/vue";
import { WclButton } from "../../lib-components";

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: "Basic/Button",
  component: WclButton,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {
    type: {
      options: ["normal", "primary", "success", "info", "warning", "danger"],
      control: { type: "select" },
      description: "Color of buttton",
    },
    size: {
      options: ["", "medium", "small", "mini"],
      control: { type: "select" },
      description: "Size of Button",
    },
    loading: {
      control: { type: "boolean" },
      description: "Toggle Loading local State",
    },
    click: { action: "click" },
  },
} as Meta;

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template: Story = (_, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { WclButton },
  template: '<WclButton v-bind="$props" @click="click">Label</WclButton>',
});

export const Example = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Example.args = {
  type: "primary",
  size: "",
  loading: false,
};
