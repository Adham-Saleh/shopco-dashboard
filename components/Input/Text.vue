<template lang="pug">
    label {{label}}
    .input-container.border.d-flex.justify-content-between.rounded-1.py-2.px-3
        .input-with-suffix.d-flex.algin-items-center
            IconEmail.my-auto(v-if="suffix === 'email'")
            IconPassword.my-auto(v-if="suffix === 'password'")
            IconUser.my-auto(v-if="suffix === 'username'")
            input.form-control.border-0(:type="type === 'password' ? passwordType : type" :placeholder="placeholder" style="width: 316px;" )
        .is-password.d-flex.align-items-center(v-if="type === 'password'")
            button.border-0.bg-transparent.d-flex.align-items-center(@click="handleShowPassword(passwordType === 'password' ? 'show' : 'hide')" type="button")
                IconEyeSlash(v-if="passwordType === 'password'")
                IconEyeSlash(v-else)
</template>

<script setup lang="ts">
const passwordType = ref<string>("password");
const props = defineProps({
  type: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    required: false,
  },
  placeholder: {
    type: String,
    required: false,
  },
  suffix: {
    type: String,
    required: false,
  },
});

const handleShowPassword = function (order: string) {
  order === "show"
    ? (passwordType.value = "text")
    : (passwordType.value = "password");
};
</script>

<style scoped>
.form-control {
  font-size: 16px !important;
}
</style>
