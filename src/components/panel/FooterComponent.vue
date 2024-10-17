<script setup lang="ts">

import { Grid, GridColumn, GridRow, SuiContainer } from 'vue-fomantic-ui'
</script>

<template>
  <Grid style="background-color: #222222" inverted :columns="4" divided>
    <GridRow>
      <GridColumn></GridColumn>
      <GridColumn>
        <SuiContainer style="color: #f2f2f2" textAlign="center">
          &copy; 2024 Leganux All Rights Reserved
        </SuiContainer>
      </GridColumn>
      <GridColumn>
        <SuiContainer style="color: #f2f2f2" textAlign="center"
        >Develop with &hearts; by experts
        </SuiContainer>
      </GridColumn>
      <GridColumn></GridColumn>
    </GridRow>
  </Grid>
</template>

<style scoped>

</style>
