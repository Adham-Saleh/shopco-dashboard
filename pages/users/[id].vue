<template lang="pug">
    .container
        .d-flex.justify-content-between.align-items-center
            .header
                Header
            .d-flex.align-items-center
                el-button.d-flex.align-items-center(type="primary" style="width: 113px; height: 40px")
                    Icon.me-2(name="Block" style="fill: none;")
                    | {{t('block')}}
                el-button.d-flex.align-items-center(type="secondary" style="width: 102px; height: 40px")
                    Icon.me-2(name="Trash" style="fill: none;")
                    | {{t('delete')}}
                el-button.d-flex.align-items-center(type="secondary" style="width: 40px; height: 40px")
                    Icon(name="ThreeDots" style="fill: none;")
        .d-flex.align-items-center.mt-4
            el-avatar.fs-1(:size="100" :src="user?.avatar") {{user?.avatar ? '' : user?.name[0]?.toUpperCase() + user?.name[1]?.toUpperCase()}}
            .info.ms-4
                span.d-block.h2 {{user?.name}}
                span.d-block.h5.fw-normal U-1234567
        el-tabs.demo-tabs.mt-3(v-model='activeName' @tab-click='handleClick')
            el-tab-pane(:label="t('account')" name='account')
        UsersInfo(v-if="activeName === 'account'" :user="user")
</template>

<script setup lang="ts">
const { t, locale } = useI18n();
const route = useRoute();
const activeName = ref<string>("account");
const id = route.params.id as string;

definePageMeta({
  layout: "main",
});

const { data: user, error } = useAsyncData(
  "getSingleUser",
  () =>
    GqlUser({
      id,
    }),
  { transform: (data: any) => data?.user }
);
</script>

<style scoped></style>
