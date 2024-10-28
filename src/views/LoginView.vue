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
import { RouterLink, useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth.store'
import { ref } from 'vue'
import HoldOnComponent from '@/components/HoldOnComponent.vue'
import { useHoldOn } from '@/stores/dimmed.store'

const HoldOn = useHoldOn()
const router = useRouter()

const authStore = useAuthStore()
const email = ref('')
const password = ref('')

const handleLogin = async () => {
  HoldOn.open('Accediendo...', 'user')
  const success = await authStore.login(email.value, password.value)
  console.log(email.value, password.value)
  if (success) {
    router.push('/dashboard')
  }
  //HoldOn.close()
}
</script>

<template>
  <HoldOnComponent />
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
              <SuiInput
                v-model="email"
                fluid
                icon="mail"
                placeholder="Correo electrónico"
              />
            </SuiFormField>
            <br />
            <SuiFormField>
              <SuiLabel>Contraseña</SuiLabel>
              <br />
              <br />
              <SuiInput
                v-model="password"
                fluid
                icon="lock"
                type="password"
                placeholder="Contraseña"
              />
            </SuiFormField>
            <br />
            <SuiButton @click="handleLogin" fluid color="teal"
              >Acceder
            </SuiButton>
            <br />
            <SuiContainer textAlign="center">
              <SuiButtonGroup>
                <SuiButton tertiary primary>Olvidé mi contraseña</SuiButton>
                <RouterLink to="/">
                  <SuiButton tertiary primary>Volver al home</SuiButton>
                </RouterLink>
              </SuiButtonGroup>
            </SuiContainer>

            <SuiDivider
              style="margin-bottom: 30px; margin-top: 30px"
            ></SuiDivider>
            <SuiButton secondary fluid icon="signup" content="Regístrarse" />
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

<style scoped>
#welcome {
  background-image: url('/web/images/bg01.jpg');
  min-height: 1000px;
  width: 100%;

  background-size: cover;
  background-repeat: no-repeat;
  height: auto;
}
</style>
