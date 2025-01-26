import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TeamView from '../views/TeamView.vue'
import ContactUsView from '@/views/ContactUsView.vue'
import LoungeView from '@/views/LoungeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/team',
      name: 'team',
      component: TeamView
    },
    {
      path: '/lounge',
      name: 'lounge',
      component: LoungeView
    },
    {
      path: '/contact-us',
      name: 'contactUs',
      component: ContactUsView
    },
  ]
})

export default router
