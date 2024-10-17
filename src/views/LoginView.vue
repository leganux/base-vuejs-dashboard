<script setup lang="ts">
import {
  SuiContainer,
  SuiSegment,
  SuiImage,
  SuiInput,
  SuiDivider,
  SuiGrid,
  SuiGridColumn,
  SuiButtonGroup,
  SuiLabel,
  SuiFormField,
  SuiButton,
} from 'vue-fomantic-ui'
import { RouterLink } from 'vue-router'
</script>

<template>
  <div id="welcome">
    <br />
    <br />
    <br />



    <SuiContainer>
      <SuiSegment style="padding: 50px" placeholder>
        <SuiGrid columns="equal">
          <SuiGridColumn textAlign="middle">
            <SuiFormField>
              <SuiLabel>Correo Electrónico</SuiLabel>
              <br />
              <br />
              <SuiInput fluid icon="mail" placeholder="Correo electrónico" />
            </SuiFormField>
            <br />
            <SuiFormField>
              <SuiLabel>Contraseña</SuiLabel>
              <br />
              <br />
              <SuiInput
                fluid
                icon="lock"
                type="password"
                placeholder="Contraseña"
              />
            </SuiFormField>
            <br />
            <SuiButton fluid color="teal">Acceder</SuiButton>
            <br />
            <SuiContainer textAlign="center">
              <SuiButtonGroup>
                <SuiButton tertiary primary>Olvidé mi contraseña</SuiButton>
                <RouterLink to="/"> <SuiButton  tertiary primary>Volver al home</SuiButton></RouterLink>

              </SuiButtonGroup>
            </SuiContainer>


            <SuiDivider style="margin-bottom: 30px; margin-top: 30px"></SuiDivider>
            <SuiButton secondary fluid icon="signup" content="Regístrarse" />
            <!--  <SuiButton icon="google" fluid white>Acceder con Google</SuiButton>
              <br />
              <SuiButton facebook icon="facebook" fluid
                >Acceder con Facebook
              </SuiButton>-->
          </SuiGridColumn>
          <SuiGridColumn textAlign="middle">
            <SuiContainer textAlign="center">
              <SuiImage src="/web/images/login.jpg" fluid />
            </SuiContainer>
          </SuiGridColumn>
        </SuiGrid>
        <SuiDivider vertical>-></SuiDivider>
      </SuiSegment>
    </SuiContainer>
  </div>
</template>

<style>
#welcome {
  background-image: url('/web/images/bg01.jpg');
  min-height: 1000px;
  width: 100%;

  background-size: cover;
  background-repeat: no-repeat;
  height: auto;
}
</style>
