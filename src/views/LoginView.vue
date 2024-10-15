<script setup lang="ts">
import {
  SuiContainer,
  SuiSegment,
  SuiHeader,
  SuiDivider,
  SuiGrid,
  SuiGridColumn,
  SuiForm,
  SuiFormField,
  SuiButton,
} from 'vue-fomantic-ui'
</script>

<template>
  <div id="welcome">
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <SuiContainer>
      <SuiSegment>
        <SuiHeader floated="right">Login/Register</SuiHeader>
        <SuiDivider clearing />
        <SuiSegment placeholder>
          <SuiGrid columns="equal">
            <SuiGridColumn>
              <SuiForm>
                <SuiFormField>
                  <label>Username</label>
                  <input type="text" placeholder="Username" />
                </SuiFormField>
                <SuiFormField>
                  <label>Password</label>
                  <input type="password" placeholder="Password" />
                </SuiFormField>
                <SuiButton primary>Login</SuiButton>
              </SuiForm>
            </SuiGridColumn>
            <SuiGridColumn textAlign="middle">
              <SuiButton secondary icon="signup" content="Sign Up" />
            </SuiGridColumn>
          </SuiGrid>
          <SuiDivider vertical>Or</SuiDivider>
        </SuiSegment>
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
