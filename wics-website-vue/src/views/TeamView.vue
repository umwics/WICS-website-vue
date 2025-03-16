<template>
    <div class="view-container">
        <div class="title">
            <h1 class="title-head">Team</h1>
            <p>These are the members of WICS during the 2024-2025 school year.</p>
        </div>

        <div>
            <div class="sub-team-container">
                <h2 class="team-type">Administrative Team</h2>
                <div class="sub-team-info">
                    <div v-for="member in admin" :key="member?.position" class="member">
                        <MemberCard :member="member"></MemberCard>
                    </div>
                </div>
            </div>

            <div class="sub-team-container">
                <h2 class="team-type">Events Team</h2>
                <div class="sub-team-info">
                    <div v-for="member in events" :key="member?.position" class="member">
                        <MemberCard :member="member"></MemberCard>
                    </div>
                </div>
            </div>

            <div class="sub-team-container">
                <h2 class="team-type">Outreach Team</h2>
                <div class="sub-team-info">
                    <div v-for="member in outreach" :key="member?.position" class="member">
                        <MemberCard :member="member"></MemberCard>
                    </div>
                </div>
            </div>

            <div class="sub-team-container">
                <h2 class="team-type">Social Media Team</h2>
                <div class="sub-team-info">
                    <div v-for="member in socialMedia" :key="member?.position" class="member">
                        <MemberCard :member="member"></MemberCard>
                    </div>
                </div>
            </div>

            <div class="sub-team-container">
                <h2 class="team-type">Website Committee</h2>
                <div class="sub-team-info">
                    <div v-for="member in websiteCommittee" :key="member?.position" class="member">
                        <MemberCard :member="member"></MemberCard>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import MemberCard from '@/components/MemberCard.vue';
import { admin } from '@/assets/data/team/admin/admin.js';
import { events } from '@/assets/data/team/events/events.js';
import { outreach } from '@/assets/data/team/outreach/outreach.js';
import { socialMedia } from '@/assets/data/team/socialMedia/socialMedia.js';
import { websiteCommittee } from '@/assets/data/team/websiteCommittee/websiteCommittee.js';

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