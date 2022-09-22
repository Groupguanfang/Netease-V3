<template>
  <n-config-provider :theme="theme">
    <n-drawer
      v-model:show="active"
      :width="250"
      :placement="placement"
    >
      <n-drawer-content
        title="网易云音乐"
      >
        <n-menu
          :options="menuOptions"
        />
      </n-drawer-content>
    </n-drawer>
  </n-config-provider>
</template>

<script> 
import { darkTheme } from 'naive-ui'
import { RouterLink } from "vue-router";
import { h } from 'vue';
export default {
  data() {
    return {
      active: false,
      theme: darkTheme,
      placement: 'left',
      menuOptions: [
        {
          label: () => h(
            RouterLink,
            {
              to: {
                name: "/",
              }
            },
            { default: () => "主页" }
          ),
          key: "home",
        },
      ],
    },
  },
  watch: {
    '$store.state.menuOpen'() {
      if(this.$store.state.menuOpen) {
       this.active = true
      } else {
        this.active = false
      }
    }
  }
}
</script>