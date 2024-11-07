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

import Swal from 'sweetalert2'
import * as _ from 'lodash'

const HoldOn = useHoldOn()
const router = useRouter()

const authStore = useAuthStore()
const email = ref('')
const password = ref('')
const user = ref('')

const isRegister = ref(false)

const handleResetPassword = async () => {
  const { value: email } = await Swal.fire({
    title: 'Ingresa tu correo electrónico',
    input: 'email',
    inputLabel: 'Tu correo electrónico',
    inputPlaceholder: 'mail@mail.com',
  })
  if (email) {
    Swal.fire({
      title: 'Verifica tu correo',
      html: `Enviamos un correo electronico a: ${email} para recuperar tu contraseña. <br>Por favor sigue las intrucciones.`,
    })
  }
}

const handleLogin = async () => {
  HoldOn.open('Accediendo...', 'user')
  const login = await authStore.login(email.value, password.value)
  console.log(email.value, password.value)
  if (login.error) {
    let error
    if (login.error?.response?.data?.message) {
      error = login?.error?.response?.data?.message

      if (Array.isArray(error)) {
        error = error
          .map(item => {
            return `<b>${_.capitalize(item)}</b>`
          })
          .join('<br>')
      }
    }

    HoldOn.close()
    Swal.fire({
      title: 'Ocurrio un error',
      html:
        'Error al iniciar sesión verifique sus credenciales <br>' +
        (error || ''),
      icon: 'error',
    })
  } else {
    HoldOn.close()
    router.push('/dashboard')
  }
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
            <template v-if="isRegister">
              <SuiFormField>
                <SuiLabel>Usuario</SuiLabel>
                <br />
                <br />
                <SuiInput
                  v-model="user"
                  fluid
                  icon="user"
                  type="string"
                  placeholder="Usuario"
                />
              </SuiFormField>
            </template>
            <br />
            <SuiButton
              v-if="!isRegister"
              @click="handleLogin"
              fluid
              color="teal"
              >Acceder
            </SuiButton>
            <SuiButton v-else @click="handleLogin" fluid secondary
              >Registrarse
            </SuiButton>

            <br />
            <SuiContainer textAlign="center">
              <SuiButtonGroup>
                <SuiButton @click="handleResetPassword" tertiary primary
                  >Olvidé mi contraseña
                </SuiButton>
                <RouterLink to="/">
                  <SuiButton tertiary primary>Volver al home</SuiButton>
                </RouterLink>
              </SuiButtonGroup>
            </SuiContainer>

            <SuiDivider
              style="margin-bottom: 30px; margin-top: 30px"
            ></SuiDivider>
            <SuiButton
              v-if="!isRegister"
              secondary
              fluid
              icon="signup"
              content="Regístrarse"
              @click="isRegister = true"
            />
            <SuiButton
              @click="isRegister = false"
              v-else
              color="teal"
              fluid
              icon="key"
              content="Acceder"
            />
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
