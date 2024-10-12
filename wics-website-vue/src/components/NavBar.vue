<template>
    <nav>
        <div id="logo-menu-container">
            <div id="logo">
                <RouterLink to="/">
                    <img src="/UMWICS NavBar Logo.png" alt="Women in Computer Science logo" />
                </RouterLink>
            </div>

            <div v-if="!navOptionsFit" id="menu-button">
                <button @click="toggleNavOptionsDropdown">
                    <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" version="1.1">
                        <path d="m2.75 12.25h10.5m-10.5-4h10.5m-10.5-4h10.5" />
                    </svg>
                </button>
            </div>
        </div>

        <div v-if="navOptionsFit || dropdownShown" id="nav-options">
            <RouterLink to="/">Home</RouterLink>
            <RouterLink to="/about-us">About Us</RouterLink>
            <RouterLink to="/team">Team</RouterLink>
            <RouterLink to="/events">Events</RouterLink>
            <RouterLink to="/outreach">Outreach</RouterLink>
            <RouterLink to="/lounge">Lounge</RouterLink>
            <RouterLink to="/contact-us">Contact Us</RouterLink>
        </div>
    </nav>
</template>

<script setup>
import { computed, onMounted, onUnmounted, ref } from 'vue';
import { RouterLink } from 'vue-router'

/**
 * detects screen size changes and determines whether 
 * all nav options fit in the current screen
 */
const windowWidth = ref(window.innerWidth);

const resizeWindowWidth = () => {
    windowWidth.value = window.innerWidth;
};

const navOptionsFit = computed(() => windowWidth.value > 800);

onMounted(() => window.addEventListener('resize', resizeWindowWidth));
onUnmounted(() => window.removeEventListener('resize', resizeWindowWidth));

// toggles dropdown
const dropdownShown = ref(false);
const toggleNavOptionsDropdown = () => {
    dropdownShown.value = !dropdownShown.value;
}

</script>

<style scoped>
* {
    /* so the bg color isn't overridden by a global/default style */
    background-color: inherit;
}

#logo-menu-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}

#logo img {
    width: 60px;
    height: 30px;
}

#menu-button svg {
    width: 60px;
    height: 40px;
    fill: none;
    stroke: var(--color-text);
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-width: 2;
}

@media (max-width: 800px) {
    nav {
        background-color: var(--color-secondary);
        color: var(--color-text);

        width: 100%;
        padding: 15px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    #nav-options {
        padding-top: 15px;
        display: flex;
        gap: 10px;
        flex-direction: column;
    }
}

@media (min-width: 801px) {
    nav {
        background-color: var(--color-secondary);
        color: var(--color-text);

        width: 100%;
        padding: 15px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    #nav-options {
        display: flex;
        gap: 20px;
        flex-direction: row;
    }
}

/* for router links */
a {
    text-decoration: none;
    color: var(--color-text);
    transition: 0.4s;
    padding: 3px;
}

@media (hover: hover) {

    /* so hover doesn't have style when on logo */
    #logo a:hover {
        background-color: var(--color-secondary);
    }

    #nav-options a:hover {
        background-color: var(--color-text-hover-background);
    }
}
</style>