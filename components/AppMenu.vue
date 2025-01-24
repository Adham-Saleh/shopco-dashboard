<template lang="pug">
    .d-flex.flex-column.justify-content-between.bg-light.p-3
      el-menu.el-menu-vertical-demo.border-0.vh-100.bg-light.mt-5(default-active="0" :collapse="false")
          .menu-items.mt-2(v-for="item, idx in menu")
              el-sub-menu(:index="`${idx}`" v-if="item.submenu.length")
                  template(#title='')
                      .d-flex.align-items-center(style="gap: 12px;")
                          Icon(:name="`${item.icon}`")
                          span.fw-bold {{item.name}}
                  el-menu-item-group(v-for="subItem,subIdx in item.submenu")
                      NuxtLink.text-decoration-none(:to="`${subItem.link}`")
                          el-menu-item(:index="`${idx}-${subIdx}`") 
                              span.fw-bold {{subItem.name}}
              NuxtLink.text-decoration-none(:to="`${item.link}`" v-else)
                  el-menu-item(:index="`${idx}`")
                      .d-flex.align-items-center(style="gap: 12px;")
                          Icon(:name="`${item.icon}`")
                          span.fw-bold {{item.name}}
      .admin-profile.px-2
        hr(style="opacity: 0.1;")
        .admin-info.d-flex.justify-content-between.align-items-center.py-3
          .d-flex.align-items-center(style="gap: 12px;")
            el-avatar(size="40") AS
            .admin-information
              p.m-0(style="font-size: 14px; font-weight: 600;") Adham Saleh
              p.m-0(style="font-size: 14px; font-weight: 400;") Super Admin
          .logout
            Icon(name="Logout" style="fill: none; cursor: pointer;")
</template>

<script setup lang="ts">
const { t, locale } = useI18n();
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
    name: "Content",
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
    name: t("content"),
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
</script>

<style scoped></style>
