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
        <leftMenuItem />
      </n-drawer-content>
    </n-drawer>
  </n-config-provider>
</template>

<script> 
import { darkTheme } from 'naive-ui'
import leftMenuItem from './leftMenuItem.vue'
export default {
  data() {
    return {
      active: false,
      theme: darkTheme,
      placement: 'left',
    }
  },
  watch: {
    '$store.state.menuOpen'() {
      if(this.$store.state.menuOpen) {
       this.active = true
      } else {
        this.active = false
      }
    }
  },
  components: { leftMenuItem }
}
</script>