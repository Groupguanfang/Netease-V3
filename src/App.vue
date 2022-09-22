<template>
  <n-config-provider :theme="theme">
    <router-view />
  </n-config-provider>
</template>

<script>
import { defineComponent, ref } from "vue";
import { darkTheme } from "naive-ui";

export default defineComponent({
  setup() {
    return {
      darkTheme,
      theme: ref(null)
    };
  }
});
</script>

<style>
body {
  background: black;
}
</style>