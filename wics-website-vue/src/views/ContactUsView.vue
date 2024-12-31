<template>
    <div class="view-container">
        <h1>Contact Us</h1>
        <p>Have something to share with us? Connect with us on our social media!</p>

        <div class="socials">
            <div v-for="social in socialMedia" :key="social?.name">
                <IconCard :socialMedia="social"></IconCard>
            </div>
        </div>
    </div>

</template>

<script setup>
import IconCard from '@/components/IconCard.vue';
import { socialMedia } from '@/assets/data/contactUs/socialMedia.js'
</script>

<style scoped>
@media (min-width: 801px) {
    .socials {
        display: flex;
        justify-content: center;
        gap: 5%;
    }
}
</style>