<template>
  <n-menu
    :options="menuOptions"
  />
</template>

<script setup>
import { defineComponent,h } from "vue"
import { RouterLink } from "vue-r"
const menuOptions = [
  {
    label: () => h(
      RouterLink,
      {
        to: "/"
      },
      { default: () => "主页" }
    ),
    key: "home",
  },
]
export default defineComponent({
  return {
    menuOptions
  }
})
</script>