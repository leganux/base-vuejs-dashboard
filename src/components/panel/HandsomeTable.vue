<script setup lang="ts">
import { ref } from 'vue'
import { HotTable } from '@handsontable/vue3'
import { registerAllModules } from 'handsontable/registry'
import 'handsontable/dist/handsontable.full.css'

registerAllModules()

const licenseKey = 'non-commercial-and-evaluation'
const data = ref([
  [false, '2016', 10, 11, 12, 13],
  [false, '2017', 20, 11, 14, 13],
  [false, '2018', 30, 15, 12, 13],
])

const columns = [
  { type: 'checkbox' }, // Columna de checkboxes
  {}, // Columna de años
  {}, // Columna de Ford
  {}, // Columna de Volvo
  {}, // Columna de Toyota
  {}, // Columna de Honda
  {
    // Columna de botones "Edit" y "Delete"
    renderer: (instance, td, row, col, prop, value, cellProperties) => {
      td.innerHTML = `
         <a style="background:transparent; border: none; padding: 0px; margin: 0px; " class="edit-btn" > Edit</a>  <a style="background:transparent; border: none padding: 0px; margin: 0px; " class="delete-btn" >Delete</a>
      `

      // Agregar funcionalidad para los botones
      const editBtn = td.querySelector('.edit-btn')
      const deleteBtn = td.querySelector('.delete-btn')

      // Acción de editar
      editBtn.onclick = () => {
        alert(`Edit row ${row + 1}`)
      }

      // Acción de eliminar
      deleteBtn.onclick = () => {
        alert(`Delete row ${row + 1}`)
        instance.alter('remove_row', row) // Eliminar la fila
      }
    },
  },
]

const colHeaders = [
  'Select',
  'Year',
  'Ford',
  'Volvo',
  'Toyota',
  'Honda',
  'Actions',
]
</script>

<template>
  <hot-table
    :columns="columns"
    :data="data"
    stretchH="all"
    :colHeaders="colHeaders"
    :licenseKey="licenseKey"
  ></hot-table>
</template>

<style scoped>
.table-container {
  width: 100%; /* Ancho completo del contenedor */
  overflow-x: auto;
}

hot-table {
  width: 100%; /* Asegura que el componente hot-table ocupe todo el ancho */
}
</style>
