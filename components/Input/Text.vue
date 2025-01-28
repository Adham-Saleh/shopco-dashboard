<template lang="pug">
    //- label {{label}}
    .input-container.border.d-flex.justify-content-between.rounded-1.py-2.px-3(:class="{'border-danger': errorMessage}")
        .input-with-suffix.d-flex.algin-items-center.w-100
            Icon.my-auto(:name="`${suffix}`")
            input.form-control.border-0(:type="type === 'password' ? passwordType : type" :placeholder="placeholder" :name="name" v-model="inputValue")
        .is-password.d-flex.align-items-center(v-if="type === 'password'")
            button.border-0.bg-transparent.d-flex.align-items-center(@click="handleShowPassword(passwordType === 'password' ? 'show' : 'hide')" type="button")
                Icon(name='EyeSlash')
    //- div(v-if="errorMessage") {{errorMessage}}
    //- .err-msg.d-flex.align-items-center.gap-2.py-1(v-if="errorMessage")
      Icon(name="Error")
      span.fw-medium(style="font-size: 12px; color: #B71A2A;") {{errorMessage}}
</template>

<script setup lang="ts">
const passwordType = ref<string>("password");
const { t, locale } = useI18n();
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
  name: {
    type: String,
    required: false,
  },
  value: {
    type: String,
    required: false,
  },
});

const handleShowPassword = function (order: string) {
  order === "show"
    ? (passwordType.value = "text")
    : (passwordType.value = "password");
};

const name = toRef(props, "name");

const {
  value: inputValue,
  errorMessage,
  handleBlur,
  handleChange,
  errors,
  meta,
} = useField(name, undefined, {
  initialValue: props.value,
});
</script>

<style scoped>
.form-control {
  font-size: 16px !important;
}
</style>
