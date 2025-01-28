<template lang="pug">
    .table-container.border.overflow-hidden(style="border-radius: 12px;")
        .table-header.d-flex.justify-content-between.align-items-center(style="padding: 16px 24px;")
            p.m-0.fw-medium(style="font-size: 18px") {{t('allUsers')}}
            el-button.border-0
                Icon(name="ThreeDots")
        ElTable(:data="data")
            template(#default)
                el-table-column(type='selection' width='55')

                el-table-column(:label="t('name')" width="216px")
                    template(#default="scope")
                        .d-flex.align-items-center.gap-3
                            el-avatar(:size="40") {{scope.row.name[0].toUpperCase() + scope.row.name[1].toUpperCase()}}
                            .info
                                span.d-block.m-0.fw-medium.text-black {{scope.row.name}} 
                                span U-123456
                        
                el-table-column( :label="t('email')")
                    template(#default="scope")
                            span {{scope.row.email}}
                el-table-column( :label="t('username')")
                    template(#default="scope")
                        span {{scope.row.name}}
                el-table-column( :label="t('mobileNumber')")
                    template(#default="scope")
                        span {{scope.row.number}}
                el-table-column( :label="t('region')")
                    template(#default="scope")
                        span {{scope.row.region}}
                el-table-column( :label="t('createdAt')" sortable prop="created_at")
                    template(#default="scope")
                        span {{scope.row.createdAt}}
                
                el-table-column
                    .actions.d-flex.justify-content-end.gap-3.align-items-center.mx-3
                        .block-action
                            el-button.border-0
                                Icon(name="Block")
                        el-dropdown
                            el-button.border-0
                                Icon(name="ThreeDots")
                            template(#dropdown='')
                                el-dropdown-menu
                                    el-dropdown-item {{t('preview')}}
                                    el-dropdown-item {{t('Edit')}}
                                    el-dropdown-item {{t('Delete')}}

            template(#empty)
                div.d-flex.justify-content-center.flex-column.align-items-center.p-5
                    i.m-0(class="bi bi-person-slash h1")
                    span.text-black.fw-normal {{t('noUsersExists')}}
                    el-button.w-25(type="secondary" @click="navigateTo('/users/add-user')") 
                        | {{t('addUser')}}
        
        .table-footer.p-3
            .d-flex.justify-content-between
                el-button.d-flex.align-items-center(type="secondary")
                    Icon.me-2(name="RightArrow")
                    | {{t('previous')}}
                el-pagination(background='' layout='pager' :total='1000')
                el-button.d-flex.align-items-center(type="secondary") 
                    | {{t('next')}}
                    Icon.ms-2(name="LeftArrow")



</template>

<script setup lang="ts">
const { t, locale } = useI18n();
const data = [
  //   {
  //     name: "Adham Saleh",
  //     email: "adham@me.com",
  //     number: "01110089669",
  //     region: "Egypt",
  //     createdAt: "25-12-2000",
  //   },
];
</script>

<style scoped></style>
