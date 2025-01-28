<template lang="pug">
    .select.position-relative
        .input-container.border.d-flex.justify-content-between.rounded-1(@click.stop="handleOpenMenu")
            .input-with-suffix.d-flex.algin-items-center.w-100
                Icon.my-auto(:name="suffix")
                input.form-control.border-0(:type="type" :placeholder="placeholder")
            .dropdown.d-flex.align-items-center.me-2
                    i(:class="`bi bi bi-arrow-${menuIsOpened ? 'up' : 'down'}`")
        .dropdown-menus.position-absolute.bg-light.p-3.w-100.d-flex.flex-column.gap-2.rounded-2.mt-2(style="cursor: pointer;" v-if="menuIsOpened")
            .dropdown-items.p-2.rounded-2(v-for="item in options" :key="item") 
                span {{item}}
</template>

<script setup lang="ts">
const menuIsOpened = ref<boolean>(false);

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
  options: {
    type: Array,
    required: true,
  },
});

const handleOpenMenu = function () {
  menuIsOpened.value = true;
};
</script>

<style scoped>
.select-icon {
  transform: rotate(180deg);
  transition: all 0.2s;
}
.dropdown-items:hover {
  background: white;
}
</style>
