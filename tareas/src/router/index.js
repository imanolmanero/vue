import { createRouter, createWebHistory } from 'vue-router'
import NuevaTareaView from '../views/NuevaTareaView.vue'
import TareasView from '../views/TareasView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'TareasView',
      component: TareasView,
    },
    {
      path: '/nueva',
      name: 'NuevaTareaView',
      component: NuevaTareaView,
    },
  
  ],
})

export default router
