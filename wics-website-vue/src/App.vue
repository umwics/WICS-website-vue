<template>
  <header>
    <NavBar></NavBar>
  </header>
  <RouterView id="main-view" />
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'
</script>

<style>
@import './assets/base.css';

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  max-width: 100%;
}

#app {
  margin: 0 auto;
  font-weight: normal;
}

body {
  background-color: var(--color-background-light);
  color: var(--color-text-dark);
  font-family: var(--font-name);

  text-align: center;
}

#main-view {
  padding-top: 100px;
}

@media (min-width: 320px) {
  .view-container {
    padding: 2rem;
  }
}

@media (min-width: 1024px) {
  .view-container {
    padding-top: 2rem;
    padding-bottom: 2rem;
    padding-left: 10rem;
    padding-right: 10rem;
  }
}
</style>
