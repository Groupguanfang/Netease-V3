<script>
import { NConfigProvider } from 'naive-ui'
import { createTheme } from 'naive-ui'

export default {
    components: { NConfigProvider },
    setup() {
      return {
        darkTheme: createTheme(
          []
        ),
      }
    }
  }
</script>

<template>
  <n-config-provider :theme="darkTheme">
    <router-view />
  </n-config-provider>
</template>

<style>
  body {
    background: black;
  }
</style>