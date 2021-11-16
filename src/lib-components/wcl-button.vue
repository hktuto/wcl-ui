<template>
  <Button v-bind="$props" @click="clickhandler"><slot /></Button>
</template>

<script lang="ts">
import Vue from "vue";
import { Button } from "element-ui";
import "element-ui/lib/theme-chalk/button.css";
import "element-ui/lib/theme-chalk/icon.css";

export default Vue.extend({
  name: "WclButton",
  props: {
    type: {
      type: String,
      default: "normal",
    },
    size: {
      type: String,
      default: "",
    },
    loading: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    Button,
  },
  methods: {
    clickhandler(): void {
      this.$emit("click");
    },
  },
});
</script>

<style scoped></style>
