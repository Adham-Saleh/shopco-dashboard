<template lang="pug">
    .container-fluid.vh-100
        .row.vh-100
            .col-lg-6.vh-100.d-none.d-lg-block.bg-primary
            .col-lg-6.d-flex.justify-content-center.align-items-center
                .d-flex.justify-content-end.align-items-center.position-absolute.top-0.w-50.p-3
                    //- .logo 
                    //-     NuxtLink.text-primary.text-decoration-none.fw-bold(to='/') SHOPCO
                    .translation
                        button.btn.rounded-5(@click="setLocale(availableLocales[0].code)")
                            i(class="bi bi-translate mx-2")
                            span {{availableLocales[0].name}}
                authenticationAuth(:isLogin="login" @togglePage="(value) => login = value")
</template>

<script setup lang="ts">
const login = ref<boolean>(true);
const { t, locale, locales, setLocale } = useI18n();
const switchLocalePath = useSwitchLocalePath();

const availableLocales = computed(() => {
  return locales.value.filter((i) => i.code !== locale.value);
});

watch(locale, (newLang: string) => {
  useHead({
    htmlAttrs: {
      dir: newLang === "ar" ? "rtl" : "ltr",
    },
  });
});
</script>

<style scoped lang="scss"></style>
