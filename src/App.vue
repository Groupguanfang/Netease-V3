<template>
  <div class="app">
    <n-config-provider ref="containerRef" :theme="theme">
      <left-menu />
      <router-view />
    </n-config-provider>
    <n-affix :bottom="120" :listen-to="() => containerRef">
      <n-button size="large" circle strong secondary type="primary">
        <n-icon>
          <Menu/>
        </n-icon>
      </n-button>
    </n-affix>
  </div>
</template>

<script>
import { darkTheme } from "naive-ui";
import { Menu } from "@vicons/ionicons5";
import leftMenu from "./components/leftMenu.vue";

export default {
  data() {
    return {
      darkTheme,
      theme: null
    }
  },
  components: { leftMenu,Menu }
};
</script>

<style>
body {
  background: black;
}
</style>