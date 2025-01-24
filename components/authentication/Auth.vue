<template lang="pug">
      Form(style="width: 404px;")
        h3 {{isLogin ? t('signInToYourAccount') : t('signUpForAnAccount')}}
        p.text-muted(v-if="isLogin") {{t('welcomeBackPleaseEnterYourDetail')}}
        InputText(type="text" placeholder="Username" suffix="username" name="username" v-if="!isLogin")
        InputText(type="email" placeholder="Email" suffix="email" name='email')
        InputText(type="password" placeholder="Password" suffix="password" name="password")

        .user-actions.d-flex.justify-content-between.align-items-center.mt-3
          .form-check.d-flex.algin-items-center.gap-2
            input#flexCheckDefault.form-check-input(type='checkbox' value='')
            label.form-check-label.my-auto(for='flexCheckDefault' style="font-size: 12px;")
              span.fw-bold(v-if="isLogin") {{t('rememberMe')}}
              span(v-else) {{t('byCreatingAnAccountMeansYouAgreeToThe')}} #[span.fw-bold {{t('termsAndConditions')}}] {{t('andOur')}} #[span.fw-bold {{t('privacyPolicy')}}]
          .forget-password(v-if="isLogin")
            button.btn.p-0.fw-bold.text-primary(style=" font-size: 14px;") {{t('forgetPassword')}}
        
        .submit-btn
          button.btn.btn-primary.w-100.rounded-5.mt-5.p-3(type="submit") {{isLogin ? 'Sign In' : 'Sign Up'}}
        
        div.d-flex.justify-content-center.mt-3
          span.d-flex.algin-items-center.gap-1(v-if="isLogin") {{t('dontHaveAnAccount')}} #[button.btn.text-primary.p-0.m-0.fw-bold(@click="handleTogglePage(false)") {{t('signUp')}}]
          span.d-flex.algin-items-center.gap-1(v-else) {{t('alreadyHaveAnAccount')}} #[button.btn.text-primary.p-0.m-0.fw-bold(@click="handleTogglePage(true)") {{t('logIn')}}]
</template>

<script setup lang="ts">
const { t, locale } = useI18n();
const props = defineProps({
  isLogin: {
    type: Boolean,
    required: false,
  },
});
const emit = defineEmits(["togglePage"]);

const handleTogglePage = function (isLogin: boolean) {
  emit("togglePage", isLogin);
};
</script>

<style scoped></style>
