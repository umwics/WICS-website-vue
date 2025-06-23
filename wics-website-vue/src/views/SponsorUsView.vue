<template>
    <div class="view-container">
        <div class="title">
            <h1 class="title-head">UMWICS Sponsorship Packages</h1>
            <h2 class="title-head">Sponsor Us!</h2>
            <p>(very great words)</p>
        </div>
        
        <div class="sponsorus-container">
            <div v-for="sponsor in sponsors" :key="sponsor?.position" class="sponsorus">
                    <CardComponent class="sponsorus-card" :image="sponsor.image" :title="sponsor.title" />
            </div>
        </div>

        <div class="end-view-message">
            <p>Interested? Email us! (link to email immediately)</p>
        </div>
    </div>
</template>

<script setup>
import { sponsors } from '../assets/data/sponsorUs/sponsors.js';
import CardComponent from '../components/CardComponent.vue'
</script>

<style scoped>
    @media (max-width: 800px) {
        .sponsorus-container{
            display: grid;
            grid-template-columns: 1fr;
            grid-gap: 2rem;
        }
    }

    @media (min-width: 801px) {
        .sponsorus-container{
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            grid-column-gap: 2rem;
            grid-row-gap: 1.5rem;    
        }

        .sponsorus{
            padding: 2%;
            align-self: stretch;
            margin: 0;
            display: flex;
        }
    }
    
    .end-view-message {
        margin-top: 1rem;
        font-size: 1.2rem;
        color: #2a4d7a;
        opacity: 0.8;
        text-align: center;
        font-weight: bold;
    }

</style>
