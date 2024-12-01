<template>
    <!-- 
    div: container, allows to group block(s) of code and apply style to them. 
    view-container is a css style in App.vue to ensure consistent spacing across
    views while reducing duplicate code. 
    -->
    <div class="view-container contact-us">
        <h1>Contact Us</h1>
        <p>Have something to share with us? Connect with us on our social medias below!</p>

        <div class="socials">
            <div v-for="social in socialMedia" :key="social?.name">
                <IconCard :socialMedia="social"></IconCard>
            </div>
        </div>
    </div>

</template>

<!-- recommended for SFC and Composition API, allows us to directly use imports, variables, etc in the template -->
<script setup>
import IconCard from '@/components/IconCard.vue';
import { socialMedia } from '@/assets/data/contactUs/socialMedia.js';

</script>

<!-- scoped ensures the style below only applies to this file -->
<style scoped>
@media (min-width: 801px) {
    .socials {
        display: flex;
        justify-content: center;
        gap: 5%;
    }
}
</style>