<script setup lang="ts">
import { useHoldOn } from '@/stores/dimmed.store'

const HoldOn = useHoldOn()

import { SuiDimmer, SuiHeader, SuiIcon, SuiLoader } from 'vue-fomantic-ui'
</script>

<template>
  <SuiDimmer :active="HoldOn.show" page @click="HoldOn.close">
    <SuiHeader as="h4" icon inverted>
      <SuiIcon :name="HoldOn.icon" />
      <br />
      <SuiLoader active inline color="teal" />
      <br />
      {{ HoldOn.text }}
    </SuiHeader>
  </SuiDimmer>
</template>

<style scoped></style>
