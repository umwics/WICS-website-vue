<template>
    <nav>
        <div class="logo-menu-container">
            <div class="logo">
                <RouterLink to="/">
                    <img src="/UMWICS NavBar Logo.png" alt="Women in Computer Science logo" />
                </RouterLink>
            </div>

            <div v-if="!navOptionsFit" class="menu-button">
                <button @click="toggleNavOptionsDropdown">
                    <svg v-if="!dropdownShown" viewBox="0 0 16 16" stroke-width="2" xmlns="http://www.w3.org/2000/svg"
                        version="1.1">
                        <path d="m2.75 12.25h10.5m-10.5-4h10.5m-10.5-4h10.5" />
                    </svg>
                    <svg v-else viewBox="0 0 24 24" stroke-width="3" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 12 7 7m5 5 5 5m-5-5 5-5m-5 5-5 5" />
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

.logo img {
    width: 70px;
    height: 30px;
}

.menu-button svg {
    width: 50px;
    height: 30px;
    fill: none;
    stroke: var(--color-text-light);
    stroke-linecap: round;
    stroke-linejoin: round;
    cursor: pointer;
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