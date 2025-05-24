import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import JobView from '@/views/JobsView.vue'

const router = createRouter({
  // Automatically sets the correct base path depending on where your app is hosted
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView,
    },
    {
      path: '/jobs',
      name: 'Jobs',
      component: JobView,
    },
  ],
})
export default router
