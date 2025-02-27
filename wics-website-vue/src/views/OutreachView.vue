<template>
    <div class="view-container">
        <div class="title">
            <h1>UMWICS Outreach</h1>
            <p>These are the outreach events and workshops WICS hoted this year!</p>
        </div>
        <div class="outreach-container">
            <div v-for="item in outreach" :key="outreach?.position" class="item">
                <CardComponent class="outreach-card" :image="item.image" :title="item.title" :description="item.description"  />
            </div>
        </div>
    </div>
</template>

<script setup>
import { outreach } from '../assets/data/outreach/outreach.js' 
import CardComponent from '../components/CardComponent.vue'
</script>

<style scoped>
.title {
    padding-bottom: 3%;
}
@media (max-width: 800px) {
    .outreach-container{

    }
}

@media (min-width: 801px) {
    .outreach-container{
    }
}
</style>