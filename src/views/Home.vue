<template>
<n-config-provider :theme="darkTheme">
  <n-tabs
    :bar-width="28"
    justify-content="space-evenly"
    size="large"
    type="line"
    animated
  >
    <n-tab-pane name="my" tab="我的">
      <My />
    </n-tab-pane>
    <n-tab-pane name="discover" tab="发现">
      Hey Jude
    </n-tab-pane>
    <n-tab-pane name="library" tab="库">
      七里香
    </n-tab-pane>
  </n-tabs>
  </n-config-provider>
</template>

<script>
import My from "./Home/My.vue";
import { darkTheme } from "naive-ui";
export default {
  components: { My },
  data() {
    return {
      darkTheme: darkTheme
    }
  },
  watch: {
    '$store.state.darkMode'() {
      if (this.$sore.state.darkMode) {
        this.darkTheme = darkTheme
      } else {
        this.darkTheme = null
      }
    }
  }
};
</script>
