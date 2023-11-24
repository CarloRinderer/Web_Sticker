import { createRouter, createWebHistory } from 'vue-router'


import NaviGator_copy from "@/components/Sticker_app/NaviGator_copy.vue"

const routes = [

    {
    path: '/',
    name: 'blackboard',
    component: NaviGator_copy
  }
  ]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
