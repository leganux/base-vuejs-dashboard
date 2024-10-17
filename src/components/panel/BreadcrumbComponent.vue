<script setup lang="ts">
import {
  MenuItem,
  SuiBreadcrumb,
  SuiBreadcrumbDivider,
  SuiBreadcrumbSection,
  SuiSegment,
} from 'vue-fomantic-ui'
import { defineProps, type PropType } from 'vue'

const props = defineProps({
  breadCrumb: {
    type: Array as PropType<Array<object>>,
    required: true,
  },
})
</script>

<template>
  <SuiSegment inverted>
    <SuiBreadcrumb size="mini" inverted>
      <template v-for="(item, index) in props?.breadCrumb" :key="index">
        <SuiBreadcrumbSection
          :to="item.url ? item.url : undefined"
          v-if="!item.divider"
          :link="item.link"
          :active="item.active"
        >
          {{ item.name }}
        </SuiBreadcrumbSection>

        <SuiBreadcrumbDivider
          v-if="index < props.breadCrumb.length - 1 && item.divider"
        >
          /
        </SuiBreadcrumbDivider>
      </template>
    </SuiBreadcrumb>
  </SuiSegment>
</template>

<style scoped></style>
