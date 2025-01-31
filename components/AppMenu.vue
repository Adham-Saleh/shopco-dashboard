<template lang="pug">
      el-menu.el-menu-vertical-demo.border-0.vh-100.bg-light.pt-5.position-relative.p-3(default-active="0" :collapse="collapse")
          //- button.btn.rounded-5.position-absolute.bg-primary.d-flex.align-items-center.z-5(style="left: 94%; bottom: 93%; width: 10px; border-radius: 50px;" @click="collapse=!collapse")
            Icon(:name="`${collapse ? 'LeftArrow' : 'RightArrow'}`")
          .menu-items.mt-2(v-for="item, idx in menu")
              el-sub-menu(:index="`${idx}`" v-if="item.submenu.length")
                  template(#title='')
                      .d-flex.align-items-center(style="gap: 12px;")
                          Icon(:name="`${item.icon}`")
                          span.fw-bold(v-if="!collapse") {{item.name}}
                  el-menu-item-group(v-for="subItem,subIdx in item.submenu")
                      NuxtLink.text-decoration-none(:to="localePath(`${subItem.link}`)")
                          el-menu-item(:index="`${idx}-${subIdx}`") 
                              span.fw-bold {{subItem.name}}
              NuxtLink.text-decoration-none(:to="localePath(`${item.link}`)" v-else)
                  el-menu-item(:index="`${idx}`")
                      .d-flex.align-items-center(style="gap: 12px;")
                          Icon(:name="`${item.icon}`")
                          span.fw-bold(v-if="!collapse") {{item.name}}
          .h-75.d-flex.flex-column
            .admin-profile.px-2.mt-auto
              hr(style="opacity: 0.1;" v-if="!collapse")
              .admin-info.d-flex.justify-content-between.align-items-center.py-3
                .d-flex.align-items-center(style="gap: 12px;")
                  el-avatar(:size="40" :src="user?.avatar") {{user?.avatar ? '' : user?.name?.at(0)?.toUpperCase() + user?.name?.at(1)?.toUpperCase() }}
                  .admin-information(v-if="!collapse")
                    p.m-0(style="font-size: 14px; font-weight: 600;") {{user?.name}}
                    p.m-0(style="font-size: 14px; font-weight: 400;") Super Admin
                .logout(v-if="!collapse" @click="handleLogout")
                  Icon(name="Logout" style="fill: none; cursor: pointer;")
</template>

<script setup lang="ts">
import { authStore } from "@/store/auth";
import { localePath } from "~/node_modules/@nuxtjs/i18n/dist/runtime/routing/compatibles/routing";

const { t, locale } = useI18n();
const localePath = useLocalePath();
const collapse = ref<boolean>(false);
const auth = authStore();
const { user } = storeToRefs(auth);
const menu = [
  {
    icon: "Home",
    name: t("home"),
    link: "/home",
    submenu: [],
  },
  {
    icon: "Users",
    name: t("users"),
    link: "/users",
    submenu: [],
  },
  {
    icon: "Experts",
    name: t("experts"),
    link: "/experts",
    submenu: [],
  },
  {
    icon: "Content",
    name: t("content"),
    link: "/content",
    submenu: [
      {
        name: "content 1",
      },
      {
        name: "content 2",
      },
      {
        name: "content 3",
      },
    ],
  },
  {
    icon: "Room",
    name: t("room"),
    link: "/rooms",
    submenu: [],
  },
  {
    icon: "AppManagement",
    name: t("appManagement"),
    link: "/app-management",
    submenu: [
      {
        name: "App management 1",
      },
      {
        name: "App management 2",
      },
      {
        name: "App management 3",
      },
    ],
  },
];

const checkScreenSize = () => {
  collapse.value = window.innerWidth < 1024;
};

onMounted(() => {
  checkScreenSize(); // Check on initial load
  window.addEventListener("resize", checkScreenSize);
});

onUnmounted(() => {
  window.removeEventListener("resize", checkScreenSize);
});

const handleLogout = function () {
  useGqlToken(null);
  navigateTo(localePath("/"));
};
</script>

<style scoped></style>
