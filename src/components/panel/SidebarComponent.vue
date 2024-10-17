<script setup lang="ts">
import {
  Menu,
  MenuItem,
  Sidebar,
  SuiContainer,
  SuiDivider,
  SuiInput,
  SuiLabel,
  SuiButton,
  SuiListItem,
} from 'vue-fomantic-ui'

import {
  defineProps,
  onBeforeUnmount,
  onMounted,
  type PropType,
  ref,
} from 'vue'

const props = defineProps({
  visible: {
    type: Boolean as PropType<boolean>,
    required: true,
  },
  menu: {
    type: Object as PropType<object>,
    required: false,
  },
})

const emit = defineEmits(['update:visible'])
const sidebarRef = ref(null)
const handleClickOutside = (event: MouseEvent) => {
  if (sidebarRef.value && !sidebarRef.value.contains(event.target as Node)) {
    emit('update:visible', false)
  }
}
const exitSidebar = () => {
  emit('update:visible', false)
}
onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})
onBeforeUnmount(() => {
  document.removeEventListener('click', handleClickOutside)
})
</script>

<template>
  <Sidebar :visible="props.visible" @hide="emit('update:visible', false)">
    <Menu inverted vertical>
      <MenuItem as="div">
        <br />
        <SuiContainer @click="exitSidebar()" textAlign="center">
          <SuiButton secondary icon="close">&nbsp;Cerrar</SuiButton>
        </SuiContainer>
        <SuiContainer textAlign="center">
          <img
            v-if="props?.menu?.imageProfile"
            style="max-width: 100px"
            :src="props?.menu?.imageProfile" />
          <img
            v-else
            style="max-width: 100px"
            src="https://leganux.com/cdn/components2/images/circullogo.png"
        /></SuiContainer>
      </MenuItem>
      <SuiDivider v-if="props?.menu?.username" inverted horizontal
        >{{ props?.menu?.username }}
      </SuiDivider>
      <SuiDivider v-else inverted horizontal>Username</SuiDivider>

      <MenuItem
        v-for="(item, index) in props?.menu?.profileItems"
        :key="index"
        as="router-link"
        :to="{ path: item.path }"
      >
        <SuiListItem>
          <SuiLabel
            color="secondary"
            size="large"
            horizontal
            :icon="item.icon"
          ></SuiLabel>
          {{ item.name }}
        </SuiListItem>
      </MenuItem>
      <SuiDivider v-if="props?.menu?.search" inverted horizontal
        >Search
      </SuiDivider>
      <MenuItem v-if="props?.menu?.search" as="div">
        <SuiInput icon="search" placeholder="Search..." />
      </MenuItem>
      <SuiDivider v-if="props?.menu?.menuItems" inverted horizontal
        >Menú
      </SuiDivider>
      <MenuItem
        v-for="(item, index) in props?.menu?.menuItems"
        :key="index"
        as="router-link"
        :active="item.active"
        :to="{ path: item.path }"
      >
        <SuiListItem>
          <SuiLabel
            color="secondary"
            size="large"
            horizontal
            :icon="item.icon"
          ></SuiLabel>
          {{ item.name }}
        </SuiListItem>
      </MenuItem>

      <SuiDivider inverted horizontal> Sesión</SuiDivider>
      <MenuItem as="router-link" :to="{ path: '/logout' }">
        <SuiListItem>
          <SuiLabel
            color="secondary"
            size="large"
            horizontal
            icon="sign out alternate"
          ></SuiLabel>
          Cerrar Sesión
        </SuiListItem>
      </MenuItem>
    </Menu>
  </Sidebar>
</template>

<style scoped></style>
