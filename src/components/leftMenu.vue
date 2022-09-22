<template>
  <n-drawer v-model:show="active" :width="100" :placement="placement">
    <n-drawer-content title="斯通纳">
      《斯通纳》是美国作家约翰·威廉姆斯在 1965 年出版的小说。
    </n-drawer-content>
  </n-drawer>
</template>

<script>
export default {
  data() {
    return {
      active: false,
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
  }
}
</script>