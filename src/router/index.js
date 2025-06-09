import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import JobView from '@/views/JobsView.vue'
import ReadMoreView from '@/views/ReadMore-view.vue'
import NotFoundView from '@/views/NotFoundView.vue'
import AddJobView from '@/views/AddJobView.vue'
import EditJobView from '@/views/EditJobView.vue'

const router = createRouter({
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
    {
      path: '/jobs/add',
      name: 'AddJob',
      component: AddJobView,
    },
    {
      path: '/jobs/:id',
      name: 'ReadMore',
      component: ReadMoreView,
    },
    {
      path: '/jobs/edit/:id',
      name: 'Edit-Job',
      component: EditJobView,
    },
    {
      path: '/:catchAll(.*)',
      name: 'NotFound',
      component: NotFoundView,
    },
  ],
})
export default router
