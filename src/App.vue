<template>
  <n-config-provider :theme="theme">
    <left-menu />
    <router-view />
  </n-config-provider>
</template>

<script>
import { darkTheme } from "naive-ui";
import leftMenu from "./components/leftMenu.vue";

export default {
  data() {
    return {
      darkTheme,
      theme: null
    }
  },
  components: { leftMenu }
};
</script>

<style>
body {
  background: black;
}
</style>