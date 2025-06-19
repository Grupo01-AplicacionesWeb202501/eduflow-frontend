<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "App"
})
</script>

<template>
  <div class="min-h-screen w-full bg-white">
    <router-view></router-view>
  </div>
</template>

<style>
  html, body, #app {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    background-color: #fff !important;
  }

  #app {
    min-height: 100vh;
    max-width: 100%;
  }

</style>