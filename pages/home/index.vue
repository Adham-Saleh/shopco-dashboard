<template lang="pug">
    p.fw-bold {{t('welcome')}}
</template>

<script setup lang="ts">
const { t, locale } = useI18n();
definePageMeta({
  layout: "main",
});
</script>

<style scoped></style>
