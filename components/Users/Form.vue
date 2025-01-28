<template lang="pug">
    Form.pt-5.pb-5.pe-5
        h2 {{t('accountInfo')}}
        .row
            .col.align-self-end.d-flex.gap-4.mt-4(style="padding-right: 250px")
                span.me-auto.fw-semibold(style="font-size: 14px") {{t('name')}}
                InputText(type="text" :placeholder="t('firstName')" name="firstname" style="width: 244px; height:40px")
                InputText(type="text" :placeholder="t('lastName')" name="lastname" style="width: 244px; height:40px")
            .col.align-self-end.d-flex.gap-4.mt-4(style="padding-right: 250px")
                span.me-auto.fw-semibold(style="font-size: 14px") {{t('email')}}
                InputText(type="email" :placeholder="t('email')" name="email" style="width:512px; height:40px")
            .col.align-self-end.d-flex.gap-4.mt-4(style="padding-right: 250px")
                span.me-auto.fw-semibold(style="font-size: 14px") {{t('password')}}
                InputText(type="password" placeholder="---" name="password" style="width:512px; height:40px")
            .col.align-self-end.d-flex.gap-4.mt-4(style="padding-right: 250px")
                span.me-auto.fw-semibold(style="font-size: 14px") {{t('role')}}
                InputSelect(type="text" :placeholder="t('role')" style="width:512px; height:40px" :options="[t('admin'), t('customer')]")

</template>

<script setup lang="ts">
const { t, locale } = useI18n();
</script>

<style scoped></style>
