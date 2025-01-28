<template lang="pug">
  .container
    Header
    .d-flex.justify-content-between.align-items-center.mt-4
      .add-user-header
        h3 {{t('addUserAccount')}}
        span {{t('addPhotoAndPersonalDetailsHere')}}
      .add-user-actions.d-flex.align-items-center.gap-1
        el-button(type="secondary" style="width: 80px; height: 40px; padding: 10px 16px;")
          | {{t('reset')}}
        el-button(type="primary"  style="width: 80px; height: 40px; padding: 10px 16px;")
          | {{t('add')}}
    UsersForm
    .add-user-actions.d-flex.align-items-center.justify-content-end.gap-1
        el-button(type="secondary" style="width: 80px; height: 40px; padding: 10px 16px;")
          | {{t('reset')}}
        el-button(type="primary"  style="width: 80px; height: 40px; padding: 10px 16px;")
          | {{t('add')}}
</template>

<script setup lang="ts">
const { t, locale } = useI18n();
definePageMeta({
  layout: "main",
});
</script>

<style scoped></style>
