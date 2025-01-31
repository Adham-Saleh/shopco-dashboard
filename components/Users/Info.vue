<template lang="pug">
    .px-5
        .row
            .d-flex.justify-content-end
                el-button(type="secondary" style="width: 86px; height: 40px;")
                    Icon.me-2(name="Edit")
                    | {{t('edit')}}
        h5.fw-semibold {{t('accountInfo')}}
        h6.mt-3.d-block {{t('name')}}
        span(style="font-size: 14px; color: #858589;") {{user?.name}}
        el-divider
        span.mt-3.d-block {{t('emailAddress')}}
        span(style="font-size: 14px; color: #858589;") {{user?.email}}
        el-divider
        span.mt-3.d-block {{t('role')}}
        span(style="font-size: 14px; color: #858589;") {{user?.role}}
</template>

<script setup lang="ts">
const { t, locale } = useI18n();
const props = defineProps({
  user: {
    type: Object,
    required: true,
  },
});
</script>

<style scoped></style>
