<script setup lang="ts">
import Dashboard from '../../components/panel/DashboardCompnent.vue'

import Datatable from '../../components/panel/DatatableComponent.vue'
import {
  SuiSegment,
  SuiHeader,
  SuiDivider,
  SuiContainer,
} from 'vue-fomantic-ui'
import CKeditorComponent from '@/components/panel/CKeditorComponent.vue'
import { ref } from 'vue'

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

const editorContent = ref('<p>Contenido inicial</p>')

const submitContent = () => {
  console.log('Contenido del editor:', editorContent.value)
  // Aquí puedes enviar el contenido a un servidor o realizar otra acción
}
setInterval(function () {
  submitContent()
}, 5000)
</script>

<template>
  <Dashboard :bread-crumb="breadCrumb">
    <SuiSegment>
      <SuiHeader floated="right">Dashboard</SuiHeader>
      <SuiDivider clearing />

      <Datatable></Datatable>
      <CKeditorComponent v-model="editorContent"></CKeditorComponent>
    </SuiSegment>
  </Dashboard>
</template>
