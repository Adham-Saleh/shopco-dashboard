<template lang="pug">
    h1 {{routes[0]}}
    el-breadcrumb(:separator-icon='ArrowRight')
        el-breadcrumb-item(v-for="currentRoute in routes" :to="{path: `/${routes.slice(0, idx).join('/')}`}") {{currentRoute}}
</template>

<script setup lang="ts">
const route = useRoute();
const routes = route.fullPath.split("/").filter((currentRoute: string) => {
  if (currentRoute) {
    return currentRoute;
  }
});
</script>

<style scoped></style>
