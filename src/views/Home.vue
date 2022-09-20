<template>
  <n-tabs :bar-width="28" justify-content="space-evenly" size="large" type="line" animated>
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
</template>

<script>
import { NTabs,NTabPane } from "naive-ui";
import My from "./Home/My.vue";
export default {
  components: { NTabs,NTabPane,My }
};
</script>