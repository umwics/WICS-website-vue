<template>
  <header>
    <NavBar></NavBar>
  </header>
  <RouterView class="main-view" />
  <FooterComponent />
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'
import FooterComponent from './components/FooterComponent.vue';
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
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  margin: 0 auto;
  font-weight: normal;
}

body {
  background-color: var(--color-background-light);
  color: var(--color-text-dark);
  font-family: var(--font-name);

  text-align: center;
}

.main-view {
  flex: 1;
}

/* global style for views */

@media (min-width: 320px) {
  .view-container {
    padding: 2rem;
    padding-top: 100px;
  }
}

@media (min-width: 1024px) {
  .view-container {
    padding-top: 100px;
    padding-bottom: 2rem;
    padding-left: 10rem;
    padding-right: 10rem;
  }
}

@media (max-width: 800px) {
  .title {
      padding-bottom: 10%;
  }
}

@media (min-width: 801px) {
  .title {
      padding-bottom: 4%;
  }
}

.title-head {
  padding-bottom: 1%;
}

/***************************/

/* global style for card components */

.card-top {
  background-color: var(--color-background-lighter_blue);
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
  height: 34px;
  border-bottom: 2px solid var(--color-border-darker_blue);
}

.card-container {
  width: 100%;
  border-radius: 12px;
  border: 2px solid var(--color-border-darker_blue);

  word-break: break-word;
}

/***************************/

/* global style for button and psuedo-button elements, excluding navigation bar */

.button {
  text-decoration: none;
  background-color: var(--color-background-lightest_blue);
  color: var(--color-text-dark);

  transition: 0.2s;
  padding: 4px;
  padding-left: 10px;
  padding-right: 10px;

  border: 2px solid var(--color-border-dark);
  border-radius: 20px;

  cursor: pointer;
}

@media (hover: hover) {
  .button:hover {
    background-color: var(--color-background-blue-hover);
    color: var(--color-text-light);
  }
}

.button:active {
  background-color: var(--color-background-dark-hover);
  color: var(--color-text-light);
}

/***************************/
</style>
