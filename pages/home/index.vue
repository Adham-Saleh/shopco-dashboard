<template lang="pug">
    p.fw-bold {{t('welcome')}}
    pre {{auth.user}}
</template>

<script setup lang="ts">
import { authStore } from "@/store/auth";
const { t, locale } = useI18n();
const auth = authStore();
definePageMeta({
  layout: "main",
});
</script>

<style scoped></style>
