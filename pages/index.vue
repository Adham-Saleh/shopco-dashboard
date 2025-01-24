<template lang="pug">
    .container-fluid.vh-100
        .row.vh-100
            .col-lg-6.vh-100.d-none.d-lg-block.bg-primary
            .col-lg-6.d-flex.justify-content-center.align-items-center
                .d-flex.justify-content-between.align-items-center.position-absolute.top-0.w-50.p-3
                    .logo 
                        NuxtLink.text-primary.text-decoration-none.fw-bold(to='/') Websito
                    .translation
                        button.btn.rounded-5
                            i(class="bi bi-translate me-2")
                            span English
                authenticationAuth(:isLogin="login" @togglePage="(value) => login = value")
</template>

<script setup lang="ts">
const login = ref<boolean>(true);
</script>

<style scoped lang="scss"></style>
