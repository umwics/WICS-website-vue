<template>
  <div class="view-container">
    <div class="title">
      <h1 class="title-head">Contact Us</h1>
      <p>Have something to share with us? Connect with us on our social media!</p>
    </div>

    <div class="socials">
      <div v-for="social in socialMedia" :key="social?.name">
        <IconCard :socialMedia="social"></IconCard>
      </div>
    </div>
  </div>
</template>

<script setup>
import IconCard from '@/components/IconCard.vue'
import { socialMedia } from '@/assets/data/contactUs/socialMedia.ts'
</script>

<style scoped>
@media (max-width: 800px) {
  .socials {
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 5%;

    padding-bottom: 36%;
  }
}

@media (min-width: 801px) {
  .socials {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 10%;
    row-gap: 20%;

    padding-bottom: 10%;
  }
}
</style>
