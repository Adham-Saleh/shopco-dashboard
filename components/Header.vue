<template lang="pug">
    h1 {{$t(routes[0])}}
    el-breadcrumb(:separator-icon='ArrowRight')
        el-breadcrumb-item(v-for="currentRoute, idx in routes" :to="{path: `/${routes.slice(0, idx+1).join('/')}`}") {{$t(currentRoute)}}
</template>

<script setup lang="ts">
const { t, locale } = useI18n();
const route = useRoute();
const routes = route.fullPath.split("/").filter((currentRoute: string) => {
  if (currentRoute && currentRoute !== "ar") {
    return currentRoute;
  }
});
</script>

<style scoped></style>
