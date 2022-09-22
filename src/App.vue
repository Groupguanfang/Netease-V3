<template>
  <div class="app" ref="containerRef">
    <n-config-provider :theme="theme">
      <left-menu />
      <router-view />
    </n-config-provider>
    <n-affix position="fixed" :listen-to="() => containerRef">
      <n-button @click="openMenu()" size="large" circle strong type="primary">
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
  methods: {
    openMenu() {
      this.$store.commit('updateMenu')
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