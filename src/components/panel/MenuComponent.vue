<script setup lang="ts">
import { Button, Menu, MenuItem } from 'vue-fomantic-ui'
import { RouterLink } from 'vue-router'
import { defineEmits, defineProps, type PropType } from 'vue'

const emit = defineEmits(['toggleSidebar'])

const props = defineProps({
  navbar: {
    type: Object as PropType<object>,
    required: false,
  },
})
</script>

<template>
  <Menu inverted>
    <MenuItem>
      <Button icon="bars" secondary @click="emit('toggleSidebar')" />
    </MenuItem>
    <MenuItem as="div">
      <RouterLink to="/dashboard">
        <img
          v-if="props?.menu?.imageBrand"
          :src="props?.menu?.imageBrand"
          style="max-height: 30px"
        />
        <img
          v-else
          src="https://leganux.com/cdn/components2/images/circullogo.png"
          style="max-height: 30px"
        />
      </RouterLink>
    </MenuItem>

    <MenuItem v-for="(item, index) in props?.navbar?.navBarItems" :key="index">
      <RouterLink :to="item.path">{{ item.name}}</RouterLink>
    </MenuItem>
  </Menu>
</template>

<style scoped></style>
