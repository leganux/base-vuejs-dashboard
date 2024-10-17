<script setup lang="ts">
import {
  SuiContainer,
  SuiSegment,
  SuiHeader,
  SuiDivider,
} from 'vue-fomantic-ui'
import { RouterLink } from 'vue-router'
</script>

<template>
  <div id="welcome">
    <br />
    <br />
    <br />
    <SuiContainer>
      <SuiSegment>
        <SuiHeader floated="right">Welcome</SuiHeader>
        <SuiDivider clearing />
        <h1>Example home page</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa strong. Cum sociis natoque
          penatibus et magnis dis parturient montes, nascetur ridiculus mus.
          Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
          Nulla consequat massa quis enim. Donec pede justo, fringilla vel,
          aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,
          imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede link
          mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum
          semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula,
          porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante,
          dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla
          ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam
          ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi.
        </p>
        <RouterLink to="/login">Login</RouterLink>
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
