<template>
    <nav>
        <div class="logo-menu-container">
            <div class="wrap">
                <div class="logo">
                    <RouterLink to="/">
                        <img src="/UMWICS Logo.png" class="logo-image" alt="Women in Computer Science logo" />
                    </RouterLink>
                </div>
            </div>

            <div v-if="!navOptionsFit" class="menu-button">
                <button @click="toggleNavOptionsDropdown">

                    <!-- License: MIT. Made by jaynewey: https://github.com/jaynewey/charm-icons -->
                    <svg v-if="!dropdownShown" viewBox="0 -1 16 16" stroke-width="2" xmlns="http://www.w3.org/2000/svg"
                        version="1.1">
                        <path d="m2.75 12.25h10.5m-10.5-4h10.5m-10.5-4h10.5" />
                    </svg>

                    <!-- License: MIT. Made by hicon: https://hicon.me/ -->
                    <svg v-else viewBox="-3 -4 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19 5L5 19" stroke-width="3" />
                        <path d="M5 5L19 19" stroke-width="3" />
                    </svg>
                </button>
            </div>
        </div>

        <div v-if="navOptionsFit || dropdownShown" class="nav-options">
            <RouterLink to="/">Home</RouterLink>
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
const navOptionsFit = computed(() => windowWidth.value > 800);
const resizeWindowWidth = () => windowWidth.value = window.innerWidth;
onMounted(() => window.addEventListener('resize', resizeWindowWidth));
onUnmounted(() => window.removeEventListener('resize', resizeWindowWidth));

// toggles dropdown
const dropdownShown = ref(false);
const toggleNavOptionsDropdown = () => dropdownShown.value = !dropdownShown.value;

</script>

<style scoped>
* {
    /* so the bg color isn't overridden by a global/default style */
    background-color: inherit;
}

.logo-menu-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}

.wrap {
    width: 90px;
    height: 30px;
    overflow: hidden;
}

.logo-image {
    margin: -18px 0px 0px 0px;
}

.logo img {
    width: 70px;
    height: auto;
}

.menu-button svg {
    width: 50px;
    height: 30px;
    fill: none;
    stroke: var(--color-text-light);
    stroke-linecap: round;
    stroke-linejoin: round;
    cursor: pointer;

    border-radius: 12px;
}

.menu-button button { 
    border: 2px solid var(--color-border-dark);
    border-radius: 12px;
} 

@media (hover: hover) {
  .menu-button button:hover {
    background-color: var(--color-background-dark-hover);
    color: var(--color-text-light);
    border: 2px solid var(--color-background-dark-hover);
    border-radius: 12px;
  }
}

.menu-button button:active {
  background-color: var(--color-background-darker_blue-active);
  color: var(--color-text-light);
  border: 2px solid var(--color-background-darker_blue-active);
  border-radius: 12px;
}

@media (max-width: 800px) {
    nav {
        background-color: var(--color-background-blue);
        color: var(--color-text-light);

        position: fixed;
        width: 100%;
        padding: 15px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .nav-options {
        padding-top: 15px;
        display: flex;
        gap: 10px;
        flex-direction: column;
        cursor: pointer;
    }
}

@media (min-width: 801px) {
    nav {
        background-color: var(--color-background-blue);
        color: var(--color-text-light);

        position: fixed;
        width: 100%;
        padding: 15px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    .nav-options {
        display: flex;
        gap: 20px;
        flex-direction: row;
        cursor: pointer;
    }
}

/* for router links */
a {
    text-decoration: none;
    color: var(--color-text-light);

    transition: 0.4s;
    padding: 7px;
    cursor: pointer;
}

.nav-options {
    -webkit-tap-highlight-color: transparent;
}

/* .router-link-active is a class from RouterLink */
.nav-options a.router-link-active {
    background-color: var(--color-background-dark-hover);
    border-radius: 20px;
}

@media (hover: hover) {

    /* so hover doesn't have style when on logo */
    .logo a:hover {
        background-color: var(--color-background-blue);
    }

    .nav-options a:hover {
        background-color: var(--color-background-dark-hover);
        border-radius: 20px;
    }
}

@media (hover: none) {

    /* so click doesn't have style when on logo */
    .logo a:active {
        background-color: var(--color-background-blue);
    }

    a:active {
        background-color: var(--color-background-dark-hover);
        border-radius: 20px;
    }
}
</style>