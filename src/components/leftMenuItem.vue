<template>
  <n-menu
    :options="menuOptions"
  />
</template>

<script setup>
import { h } from "vue";
import { defineComponent } from "vue";
import { RouterLink } from "vue-router";
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