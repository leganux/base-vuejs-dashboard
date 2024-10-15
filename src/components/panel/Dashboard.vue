<script setup lang="ts">
import {
  Button,
  Grid,
  GridColumn,
  GridRow,
  Menu,
  MenuItem,
  Sidebar,
  SuiContainer,
  SuiDivider,
  SuiInput,
  SuiLabel,
  SuiListItem,
  SuiSegment,
  SuiBreadcrumb,
  SuiBreadcrumbSection,
  SuiBreadcrumbDivider,
} from 'vue-fomantic-ui'
import { RouterLink } from 'vue-router'
import { ref } from 'vue'

const visible = ref(false)
</script>

<template>
  <Sidebar v-model:visible="visible">
    <Menu inverted vertical>
      <MenuItem as="div">
        <br />
        <SuiContainer textAlign="center"
          ><img
            style="max-width: 100px"
            src="https://leganux.com/cdn/components2/images/circullogo.png"
        /></SuiContainer>
      </MenuItem>
      <SuiDivider inverted horizontal>Username</SuiDivider>
      <MenuItem as="router-link" :to="{ path: '/dashboard' }">
        <SuiListItem>
          <SuiLabel
            color="secondary"
            size="large"
            horizontal
            icon="user"
          ></SuiLabel>
          Profile
        </SuiListItem>
      </MenuItem>
      <SuiDivider inverted horizontal>Search</SuiDivider>
      <MenuItem as="div">
        <SuiInput icon="search" placeholder="Search..." />
      </MenuItem>
      <SuiDivider inverted horizontal>Menú</SuiDivider>
      <MenuItem as="router-link" :to="{ path: '/dashboard' }">
        <SuiListItem>
          <SuiLabel
            color="secondary"
            size="large"
            horizontal
            icon="paw"
          ></SuiLabel>
          Dashboard
        </SuiListItem>
      </MenuItem>
      <MenuItem as="router-link" :to="{ path: '/users' }">
        <SuiListItem>
          <SuiLabel
            color="secondary"
            size="large"
            horizontal
            icon="users"
          ></SuiLabel>
          Users
        </SuiListItem>
      </MenuItem>
      <SuiDivider inverted horizontal> Sesión</SuiDivider>
      <MenuItem as="router-link" :to="{ path: '/logout' }">
        <SuiListItem>
          <SuiLabel
            color="secondary"
            size="large"
            horizontal
            icon="sign out alternate"
          ></SuiLabel>
          Cerrar Sesión
        </SuiListItem>
      </MenuItem>
    </Menu>
  </Sidebar>

  <Menu inverted>
    <MenuItem>
      <Button icon="bars" secondary @click="visible = !visible" />
    </MenuItem>
    <MenuItem as="div">
      <RouterLink to="/dashboard">
        <img
          src="https://leganux.com/cdn/components2/images/circullogo.png"
          style="max-height: 30px"
        />
      </RouterLink>
    </MenuItem>
    <MenuItem>
      <RouterLink to="/dashboard">Dashboard</RouterLink>
    </MenuItem>
    <MenuItem>
      <RouterLink to="/about">About</RouterLink>
    </MenuItem>
  </Menu>

  <SuiContainer fluid style="padding: 20px">
    <div style="min-height: 800px">
      <SuiSegment inverted>
        <SuiBreadcrumb size="mini" inverted>
          <SuiBreadcrumbSection link>Home</SuiBreadcrumbSection>
          <SuiBreadcrumbDivider> /</SuiBreadcrumbDivider>
          <SuiBreadcrumbSection link>Registration</SuiBreadcrumbSection>
          <SuiBreadcrumbDivider> /</SuiBreadcrumbDivider>
          <SuiBreadcrumbSection active
            >Personal Information
          </SuiBreadcrumbSection>
        </SuiBreadcrumb>
      </SuiSegment>

      <slot></slot>
    </div>

    <SuiDivider />
  </SuiContainer>
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

<style scoped></style>
