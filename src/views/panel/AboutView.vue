<script setup lang="ts">
import Dashboard from '@/components/panel/Dashboard.vue'
import { SuiDivider, SuiHeader, SuiSegment } from 'vue-fomantic-ui'
</script>

<template>
  <Dashboard>
    <SuiSegment>
      <SuiHeader floated="right">About</SuiHeader>
      <SuiDivider clearing />
    </SuiSegment>
  </Dashboard>
</template>

<style></style>
