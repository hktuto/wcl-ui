<template>
  <Radio><slot /></Radio>
</template>

<script lang="ts">
import Vue from "vue";
import { Radio } from "element-ui";
import "element-ui/lib/theme-chalk/radio.css";
export default Vue.extend({
  components: { Radio },
  props: {},
});
</script>
