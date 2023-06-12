import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/prices',
    name: 'prices',
    component: () => import(/* webpackChunkName: "about" */ '../views/PricesView.vue')
  },
  {
    path: '/message',
    name: 'message',
    component: () => import(/* webpackChunkName: "messages" */ '../views/MessageView.vue')
  },
  {
    path: '/vehicle',
    name: 'vehicle',
    component: () => import(/* webpackChunkName: "vehicle" */ '../views/VehicleView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
