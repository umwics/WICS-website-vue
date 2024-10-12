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
  background-color: var(--color-primary);
  color: var(--color-text);
  font-family: var(--font-name);

  text-align: center;
}

#main-view {
  padding-top: 100px;
}

@media (min-width: 320px) {
  .text-block {
    padding: 2rem;
  }

  body {
    display: flex;
    place-items: center;
  }
}

@media (min-width: 1024px) {
  .text-block {
    padding-top: 2rem;
    padding-bottom: 2rem;
    padding-left: 10rem;
    padding-right: 10rem;
  }

  body {
    display: flex;
    place-items: center;
  }
}
</style>
