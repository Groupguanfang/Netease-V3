<template>
  <n-config-provider :theme="theme">
    <n-card>
      <n-space>
        <n-button @click="theme = darkTheme">
          深色
        </n-button>
        <n-button @click="theme = null">
          浅色
        </n-button>
      </n-space>
    </n-card>
  </n-config-provider>
</template>

<script>
import { defineComponent, ref } from "vue";
import { NButton,NSpace,NCard,darkTheme } from "naive-ui";

export default defineComponent({
  setup() {
    return {
      darkTheme,
      NButton,
      NSpace,
      NCard,
      darkTheme,
      theme: ref(null)
    };
  }
});
</script>