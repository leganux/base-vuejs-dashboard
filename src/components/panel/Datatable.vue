<script setup lang="ts">
import { onMounted, ref } from 'vue'
import DataTable from 'datatables.net-vue3'
import DataTablesCore from 'datatables.net'
import DataTablesLib from 'datatables.net'
import 'datatables.net-buttons'
import 'datatables.net-buttons/js/buttons.html5'
import 'datatables.net-responsive'
import 'datatables.net-select'
import 'datatables.net-colreorder'
import 'datatables.net-colreorder-se'
import 'datatables.net-se'
import 'datatables.net-buttons-se'
import 'datatables.net-responsive-se'
import 'datatables.net-scroller'
import 'datatables.net-scroller-se'

import jszip from 'jszip'
import pdfmake from 'pdfmake'
import { SuiContainer, SuiButton } from 'vue-fomantic-ui'

DataTable.use(DataTablesCore)
DataTable.use(DataTablesLib)
DataTablesLib.Buttons.jszip(jszip)
DataTablesLib.Buttons.pdfMake(pdfmake)

function editRow(id) {
  console.log(`Edit row with ID: ${id}`)
  // Implement your edit functionality here
}

function deleteRow(id) {
  console.log(`Delete row with ID: ${id}`)
  // Implement your delete functionality here
}

const initializeButtons = () => {
  const editButtons = document.querySelectorAll('.edit-btn')
  const deleteButtons = document.querySelectorAll('.delete-btn')

  editButtons.forEach(button => {
    button.addEventListener('click', event => {
      const id = event.target.getAttribute('data-id')
      editRow(id)
    })
  })

  deleteButtons.forEach(button => {
    button.addEventListener('click', event => {
      const id = event.target.getAttribute('data-id')
      deleteRow(id)
    })
  })
}

const columns = [
  { data: 'name' },
  { data: 'position' },
  { data: 'office' },
  { data: 'extn' },
  { data: 'start_date' },
  { data: 'salary' },
  {
    data: null, // No specific data for action buttons
    orderable: false, // Disable sorting for this column
    render: (data, type, row) => {
      return `
        <button class="edit-btn compact mini ui  primary button" data-id="${row.id}"><i aria-hidden="true" class="edit icon"></i>Edit</button>

        <button class="delete-btn compact mini ui  red button " data-id="${row.id}"><i aria-hidden="true" class="trash icon"></i>Delete</button>
      `
    },
  },
]

const table = ref()

const options = {
  columnFilter: true,
  language: {
    lengthMenu: 'Mostrar &nbsp; _MENU_ &nbsp; resultados <br><br>',
    search: 'Buscar: &nbsp;  ',
    decimal: '',
    emptyTable: 'No hay datos en la tabla',
    info: 'Mostrando _START_ a _END_ de _TOTAL_ registros',
    infoEmpty: 'Mostrando 0 a 0 de 0 entries',
    infoFiltered: '(filtered from _MAX_ total entries)',
    infoPostFix: '',
    thousands: ',',
    loadingRecords: 'Cargando...',
    processing: '',
    zeroRecords: 'Ninguna concidencia encontrada',
    paginate: {
      first: 'Primera',
      last: 'Ultima',
      next: 'Siguiente',
      previous: 'Previa',
    },
    aria: {
      orderable: 'Ordenar por esta columna',
      orderableReverse: 'Ordenar inversa por esta columna',
    },
  },
  lengthMenu: [
    [5, 10, 15, 25, 50, 100, 1000, -1],
    ['5 ', '10 ', '15 ', '25 ', '50 ', '100 ', '1000 ', 'Todos los'],
  ],
  dom: '<"top">l<"clear"><br>fr<br>B<br>t<"bottom"pi><"clear">', //'<"top"lBfr>ptip',
  responsive: true,
  select: true,
  pageLength: 10,
  searching: true,
  fixedHeader: false,
  buttons: [
    {
      extend: 'copy',
      text: 'Copiar al porta papeles',
      exportOptions: {
        columns: ':visible',
      },
    },
    {
      extend: 'excel',
      text: 'Exportar a Excel',
      exportOptions: {
        columns: ':visible',
      },
    },
    {
      extend: 'pdf',
      text: 'Exportar a PDF',
      exportOptions: {
        columns: ':visible',
      },
    },
  ],
  drawCallback: function () {
    initializeButtons()
  },
}

onMounted(() => {
  const dt = table.value.dt
  dt.draw()
})
</script>

<template>
  <SuiContainer textAlign="right">
    <SuiButton basic positive>New</SuiButton>
  </SuiContainer>
  <DataTable
    ref="table"
    :columns="columns"
    ajax="/data.json"
    class="display ui teal celled selectable table"
    width="100%"
    :options="options"
  >
    <thead>
      <tr>
        <th>Name</th>
        <th>Position</th>
        <th>Office</th>
        <th>Extn.</th>
        <th>Start date</th>
        <th>Salary</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tfoot>
      <tr>
        <th>Name</th>
        <th>Position</th>
        <th>Office</th>
        <th>Extn.</th>
        <th>Start date</th>
        <th>Salary</th>
        <th>Actions</th>
      </tr>
    </tfoot>
  </DataTable>
</template>
<style scoped>
@import '../../../node_modules/datatables.net-dt';
</style>
