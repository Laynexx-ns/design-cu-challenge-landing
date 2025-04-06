import { createRouter, createWebHistory } from 'vue-router'
import MainPage from '@/pages/MainPage.vue'
import PhonePage from '@/pages/PhonePage.vue'
import TablePage from '@/pages/TablePage.vue'
import ControllerPage from '@/pages/ControllerPage.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: MainPage,
    },
    {
      path: '/mobile',
      name: 'phone',
      component: PhonePage,
    },
    {
      path: '/table',
      name: "table",
      component: TablePage,
    },
    {
      path: '/controller',
      name: 'controller',
      component: ControllerPage,
    }
  ],
})

export default router
