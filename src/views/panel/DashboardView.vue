<script setup lang="ts">
import Dashboard from '../../components/panel/Dashboard.vue'

import Datatable from '../../components/panel/Datatable.vue'
import {
  SuiSegment,
  SuiHeader,
  SuiDivider,
  SuiContainer,
} from 'vue-fomantic-ui'

const breadCrumb = [
  {
    active: false,
    link: true,
    name: 'Home',
    divider: false,
    url: '/',
  },
  {
    divider: true,
  },
  {
    active: true,
    link: false,
    name: 'Dashboard',
    divider: false,
  },
]
</script>

<template>
  <Dashboard :bread-crumb="breadCrumb">
    <SuiSegment>
      <SuiHeader floated="right">Dashboard</SuiHeader>
      <SuiDivider clearing />

      <Datatable></Datatable>
    </SuiSegment>
  </Dashboard>
</template>
