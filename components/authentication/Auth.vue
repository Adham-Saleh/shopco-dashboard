<template lang="pug">
      Form(style="width: 404px;" :validationSchema="isLogin ? loginSchema : signupSchema" @submit="handleSubmit")
        h3 {{isLogin ? t('signInToYourAccount') : t('signUpForAnAccount')}}
        p.text-muted(v-if="isLogin") {{t('welcomeBackPleaseEnterYourDetail')}}
        InputText.py-2.px-3.mt-3(type="text" :placeholder="$t('username')" suffix="User" name="username" v-if="!isLogin")
        InputText.py-2.px-3.mt-3(type="email" :placeholder="$t('email')" suffix="Email" name='email')
        InputText.py-2.px-3.mt-3(type="password" :placeholder="$t('password')" suffix="Password" name="password")

        .user-actions.d-flex.justify-content-between.align-items-center.mt-3
          .form-check.d-flex.algin-items-center.gap-2
            input#flexCheckDefault.form-check-input(type='checkbox' value='')
            label.form-check-label.my-auto(for='flexCheckDefault' style="font-size: 12px;")
              span.fw-bold(v-if="isLogin") {{t('rememberMe')}}
              span(v-else) {{t('byCreatingAnAccountMeansYouAgreeToThe')}} #[span.fw-bold {{t('termsAndConditions')}}] {{t('andOur')}} #[span.fw-bold {{t('privacyPolicy')}}]
          .forget-password(v-if="isLogin")
            button.btn.p-0.fw-bold.text-primary(style=" font-size: 14px;" type="button") {{t('forgetPassword')}}
        
        .submit-btn
          el-button.w-100.rounded-5.mt-5.p-4(type="primary" native-type="submit" :loading="loading") {{isLogin ? t('signin') : t('signup')}}
        
        div.d-flex.justify-content-center.mt-3
          span.d-flex.algin-items-center.gap-1(v-if="isLogin") {{t('dontHaveAnAccount')}} #[button.btn.text-primary.p-0.m-0.fw-bold(@click="handleTogglePage(false)") {{t('signup')}}]
          span.d-flex.algin-items-center.gap-1(v-else) {{t('alreadyHaveAnAccount')}} #[button.btn.text-primary.p-0.m-0.fw-bold(@click="handleTogglePage(true)") {{t('signin')}}]
</template>

<script setup lang="ts">
import * as yup from "yup";
import { authStore } from "@/store/auth";
import { useLocalePath } from "#i18n";

const { t, locale } = useI18n();
const localePath = useLocalePath();
const auth = authStore();
const loading = ref<boolean>(false);
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

const loginSchema = yup.object({
  email: yup.string().required().email().label(t("email")),
  password: yup
    .string()
    .required("Field is required")
    .min(8, "Your password is not strong enough. Use at least 8 characters")
    .label(t("password")),
});

const signupSchema = yup.object({
  username: yup.string().required().label(t("username")),
  email: yup.string().required().email().label(t("email")),
  password: yup
    .string()
    .required("Field is required")
    .min(8, "Your password is not strong enough. Use at least 8 characters")
    .label(t("password")),
});

const handleSubmit = async function (values: {
  username?: string;
  email: string;
  password: string;
}) {
  const { username, email, password } = values;
  loading.value = true;
  if (props.isLogin) {
    const { accessToken, refreshToken } = await auth.login(email, password);
    if (!accessToken) {
      ElMessage({
        type: "error",
        message: "Wrong email or password",
      });
      loading.value = false;
      return;
    }
    useGqlToken(accessToken as string);
    const me = await auth.authorize();
    ElMessage({
      type: "success",
      message: "Logged in successfully",
    });
    auth.setData(me);
    navigateTo(localePath("/home"));
  } else {
    const data = await auth.signup({ name: username || "", email, password });
    if (!data.success) {
      ElMessage({
        type: "error",
        message: "Something went wrong",
      });
      loading.value = false;
      return;
    }
    ElMessage({ type: "success", message: "Account created successfully" });
    emit("togglePage", true);
  }
  loading.value = false;
};
</script>

<style scoped></style>
