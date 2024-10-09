<template>
    <nav>
        <div id="logo">
            <RouterLink to="/">
                <img src="../../public/UMWICS Logo.png" alt="Women in Computer Science logo" />
            </RouterLink>
        </div>

        <div id="navOptions">
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
import { RouterLink } from 'vue-router'
</script>

<style scoped>
nav {
    background-color: var(--color-secondary);
    color: var(--color-text);
    padding: 15px;
    display: flex;
    justify-content: space-between;
}

img {
    justify-content: left;
}

#logo img {
    width: 60px;
    height: 30px;
}

#navOptions {
    display: flex;
    justify-content: right;
    gap: 20px;
    align-items: flex-end;
}

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

    #navOptions a:hover {
        background-color: var(--color-text-hover-background);
    }
}
</style>