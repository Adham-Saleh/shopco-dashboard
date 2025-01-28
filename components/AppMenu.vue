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
                      NuxtLink.text-decoration-none(:to="`${subItem.link}`")
                          el-menu-item(:index="`${idx}-${subIdx}`") 
                              span.fw-bold {{subItem.name}}
              NuxtLink.text-decoration-none(:to="`${item.link}`" v-else)
                  el-menu-item(:index="`${idx}`")
                      .d-flex.align-items-center(style="gap: 12px;")
                          Icon(:name="`${item.icon}`")
                          span.fw-bold(v-if="!collapse") {{item.name}}
          .h-75.d-flex.flex-column
            .admin-profile.px-2.mt-auto
              hr(style="opacity: 0.1;" v-if="!collapse")
              .admin-info.d-flex.justify-content-between.align-items-center.py-3
                .d-flex.align-items-center(style="gap: 12px;")
                  el-avatar(:size="40") AS
                  .admin-information(v-if="!collapse")
                    p.m-0(style="font-size: 14px; font-weight: 600;") Adham Saleh
                    p.m-0(style="font-size: 14px; font-weight: 400;") Super Admin
                .logout(v-if="!collapse")
                  Icon(name="Logout" style="fill: none; cursor: pointer;")
</template>

<script setup lang="ts">
const { t, locale } = useI18n();
const collapse = ref<boolean>(false);
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
  console.log("window size -->", window.innerWidth);
};

onMounted(() => {
  checkScreenSize(); // Check on initial load
  window.addEventListener("resize", checkScreenSize);
});

onUnmounted(() => {
  window.removeEventListener("resize", checkScreenSize);
});
</script>

<style scoped></style>
