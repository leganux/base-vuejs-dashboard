<script setup lang="ts">
import { SuiContainer, SuiDivider } from 'vue-fomantic-ui'

import { defineProps, type PropType, ref } from 'vue'
import FooterComponent from '@/components/panel/FooterComponent.vue'
import BreadcrumbComponent from '@/components/panel/BreadcrumbComponent.vue'
import SidebarComponent from '@/components/panel/SidebarComponent.vue'
import MenuComponent from '@/components/panel/MenuComponent.vue'
import MenuConfig from '@/config/menu.config'

const visible = ref(false)

const toggleSidebar = () => {
  visible.value = !visible.value
}
const menu = MenuConfig(
  'Erick',
  'https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg',
  undefined,
  false,
)

const props = defineProps({
  breadCrumb: {
    type: Array as PropType<Array<object>>,
    required: true,
  },
})
</script>

<template>
  <SidebarComponent
    :menu="menu"
    :visible="visible"
    @update:visible="visible = $event"
  />
  <MenuComponent :navbar="menu" @toggleSidebar="toggleSidebar"></MenuComponent>

  <SuiContainer fluid style="padding: 20px">
    <div style="min-height: 800px">
      <BreadcrumbComponent
        :bread-crumb="props.breadCrumb"
      ></BreadcrumbComponent>

      <slot></slot>
    </div>

    <SuiDivider />
  </SuiContainer>
  <FooterComponent></FooterComponent>
</template>

<style scoped></style>
