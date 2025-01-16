<template>
    <div class="view-container">
        <div class="title">
            <h1 class="title-head">Events</h1>
            <p>These are the members of WICS during the 2024-2025 school year.</p>
        </div>
        
        <div class="events-container">
            <div v-for="event in events" :key="event?.position" class="event">
                    <CardComponent class="event-card" :image="event.image" :description="event.description" :title="event.title" />
            </div>
        </div>
    </div>
</template>

<script setup>
import { events } from '../assets/data/events/events.js';
import CardComponent from '../components/CardComponent.vue'
</script>

<style scoped>
    .title {
        padding-bottom: 4%;
    }

    .title-head {
        padding-bottom: 1%;
    }

    @media (max-width: 800px) {
        .events-container{
            display: grid;
            grid-template-columns: 1fr;
            grid-gap: 2rem;
        }
    } 

    @media (min-width: 801px) {
        .events-container{
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            grid-column-gap: 2rem;
            grid-row-gap: 1.5rem;    
        }

        .event{
            padding: 2%;
            align-self: stretch;
            margin: 0;
            display: flex;
        }
    }
</style>
