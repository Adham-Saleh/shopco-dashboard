<template lang="pug">
    .container
      .d-flex.justify-content-between.align-items-center
        .header
          Header
        .d-flex.align-items-center
          el-button.d-flex.align-items-center(type="secondary" style="width: 105px; height: 40px")
            Icon.me-2(name="Export" style="fill: none;")
            | {{t('export')}}
          el-button.d-flex.align-items-center(type="primary" style="width: 122px; height: 40px" @click="navigateTo('/users/add-user')")
            Icon.me-2(name="Plus" style="fill: none;")
            | {{t('addUser')}}
      el-tabs.demo-tabs.mt-3(v-model='activeName' @tab-click='handleClick')
        el-tab-pane(:label="t('activeUsers')" name='activeUsers')
        el-tab-pane(:label="t('blockedUsers')" name='blockedUsers') 
      .d-flex.justify-content-between.align-items.center.mb-2
        InputText.px-3.py-1.rounded-2(type="text" :placeholder="$t('search')" suffix="Search" style="height: 40px; width: 400px;")
        .d-flex.align-items-center.gap-2
          InputText.px-3.rounded-2(type="date" style="height:40px;  width: 236px;")
          el-button.d-flex.align-items-center(type="secondary" style="width: 101px; height: 40px")
            Icon.me-2(name="Filter")
            | {{t('filter')}}
      UsersActiveTable.mt-3(v-if="activeName === 'activeUsers'")

</template>

<script setup lang="ts">
import type { TabsPaneContext } from "element-plus";

const { t, locale } = useI18n();
definePageMeta({
  layout: "main",
});

const activeName = ref<string>("activeUsers");

const handleClick = (tab: TabsPaneContext, event: Event) => {
  activeName.value = tab.props.name as string;
};
</script>

<style lang="scss" scoped></style>
