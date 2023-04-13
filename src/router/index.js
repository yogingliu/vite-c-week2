import { createRouter, createWebHistory } from 'vue-router'
import Product from '../views/Product.vue'
import Home from '../views/Test.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/test2',
      name: 'test2',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Test2.vue')
    },
    {
      path: '/ApiTest',
      name: 'ApiTest',
      component: () => import('../views/ApiTest.vue')
    },
    {
      path: '/ApiTest2',
      name: 'ApiTest2',
      component: () => import('../views/ApiTest2.vue')
    },
    {
      path: '/login',
      name: 'login',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Login.vue')
    },
    {
      path: '/product',
      name: 'product',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Product.vue')
    },
  ]
})

export default router
