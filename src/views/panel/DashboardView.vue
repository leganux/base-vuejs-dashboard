<script setup lang="ts">
import Dashboard from '../../components/panel/Dashboard.vue'

import Datatable from '../../components/panel/Datatable.vue'
import {
  SuiSegment,
  SuiHeader,
  SuiDivider,
  SuiContainer,
} from 'vue-fomantic-ui'
</script>

<template>
  <Dashboard>
    <SuiSegment>
      <SuiHeader floated="right">Dashboard</SuiHeader>
      <SuiDivider clearing />

      <Datatable></Datatable>
    </SuiSegment>
  </Dashboard>
</template>
