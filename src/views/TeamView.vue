<template>
  <div class="view-container">
    <div class="title">
      <h1 class="title-head">UMWICS Team</h1>
      <p>These are the members of UMWICS during the 2024-2025 school year.</p>
    </div>

    <div v-for="team in teams" :key="team.name" class="sub-team-container">
      <h2 class="team-type">{{ team.name }}</h2>
      <div class="sub-team-info">
        <div v-for="member in team.members" :key="member.name" class="member">
          <MemberCard v-bind="member" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import MemberCard from '@/components/MemberCard.vue'
import { admin } from '@/assets/data/team/admin/admin.js'
import { events } from '@/assets/data/team/events/events.js'
import { outreach } from '@/assets/data/team/outreach/outreach.js'
import { socialMedia } from '@/assets/data/team/socialMedia/socialMedia.js'
import { websiteCommittee } from '@/assets/data/team/websiteCommittee/websiteCommittee.js'

const teams = [
  {
    name: 'Administrative Team',
    members: admin
  },
  {
    name: 'Events Team',
    members: events
  },
  {
    name: 'Outreach Team',
    members: outreach
  },
  {
    name: 'Social Media Team',
    members: socialMedia
  },
  {
    name: 'Website Committee',
    members: websiteCommittee
  }
]
</script>

<style scoped>
.team-type {
  text-align: start;
}

@media (max-width: 800px) {
  .sub-team-container {
    padding-bottom: 4%;
    padding-top: 2%;
  }

  .sub-team-info {
    display: grid;
    grid-template-columns: 1fr;
  }

  .member {
    flex: 100%;
    padding: 2%;
  }
}

@media (min-width: 801px) {
  .sub-team-container {
    padding-bottom: 2%;
    padding-top: 1%;

    height: fit-content;
  }

  .sub-team-info {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
  }

  .member {
    flex: 50%;
    padding: 2%;
  }
}
</style>
