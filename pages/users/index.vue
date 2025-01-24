<template lang="pug">
    .container.mt-3
      .d-flex.justify-content-between.align-items-center
        .header
          Header
        .d-flex.align-items-center
          el-button.d-flex.align-items-center(type="secondary" style="width: 105px; height: 40px")
            Icon.me-2(name="Export" style="fill: none;")
            | Export
          el-button.d-flex.align-items-center(type="primary" style="width: 122px; height: 40px")
            Icon.me-2(name="Plus" style="fill: none;")
            | Add User
      el-tabs.demo-tabs.mt-3(v-model='activeName' @tab-click='handleClick')
        el-tab-pane(label='Active users' name='activeUsers')
        el-tab-pane(label='Blocked users' name='blockedUsers') 
      //- .d-flex.justify-content-between.align-items.center 
        InputText(type="text" placeholder="Search")
      UsersActiveTable(v-if="activeName === 'activeUsers'")

</template>

<script setup lang="ts">
import type { TabsPaneContext } from "element-plus";

definePageMeta({
  layout: "main",
});

const activeName = ref<string>("");

const handleClick = (tab: TabsPaneContext, event: Event) => {
  activeName.value = tab.props.name as string;
};
</script>

<style lang="scss" scoped></style>
