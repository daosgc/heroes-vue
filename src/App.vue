<script setup lang="ts">
import { RouterView } from "vue-router";
import NavBar from "./components/NavBar.vue";
</script>

<template>
  <div class="main-section columns">
    <NavBar />
    <main class="column">
      <router-view />
    </main>
  </div>
</template>

<style lang="scss">
@import "@/styles/index.scss";
</style>
