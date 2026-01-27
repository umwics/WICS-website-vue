<template>
  <div class="view-container">
    <div class="title">
      <h1 class="title-head">UMWICS Outreach</h1>
      <p>These are the outreach events and workshops WICS hosted this year!</p>
    </div>
    <div class="outreach-container">
      <div v-for="item in outreach" :key="item?.position" class="outreach-card">
        <CardComponent
          :imagePosition="position"
          :image="item.image"
          :title="item.title"
          :description="item.description"
        />
      </div>
      <CardComponent
        title="Outreach Discord Server"
        description="Interested in volunteering with us?"
      >
        <template #secondary-content>
          <p>Join our server below to get more information about our volunteer opportunities!</p>
          <a class="button outreach-button" href="https://discord.gg/G98TGzG3UD" target="_blank"
            >Sign up here!</a
          >
        </template>
      </CardComponent>
    </div>
  </div>
</template>

<script setup>
import { outreach } from '../assets/data/outreach/outreach.js'
import CardComponent from '../components/CardComponent.vue'
const position = 'side'
</script>

<style scoped>
.title {
  padding-bottom: 3%;
}

.outreach-button {
  display: inline-block;
  margin-top: 20px;
}

@media (max-width: 800px) {
  .outreach-card {
    padding-bottom: 5%;
  }
}

@media (min-width: 801px) {
  .outreach-card {
    padding-bottom: 3%;
  }
}

.outreach-card:last-of-type {
  padding-bottom: 0;
}

.outreach-card {
  white-space: pre-line;
}
</style>
