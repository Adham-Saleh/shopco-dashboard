<template lang="pug">
    .container-fluid.vh-100
        .row
            AppMenu.col-lg-2
            .col-lg.overflow-hidden.mt-4
                slot
</template>

<script setup lang="ts">
import { authStore } from "@/store/auth";
const auth = authStore();
onMounted(async () => {
  await nextTick();
  const me = await auth.authorize();
  auth.setData(me);
});
</script>

<style scoped></style>
