// src/router/index.ts
import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomeView.vue' // Assuming HomePage.vue is in src/components

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage,
  },
  // You can add more routes here as needed for other pages
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/AboutView.vue'), // Example of lazy loading
  },
  // {
  //   path: '/services',
  //   name: 'Services',
  //   component: () => import('../components/ServicesPage.vue'),
  // },
  // {
  //   path: '/publications',
  //   name: 'Publications',
  //   component: () => import('../components/PublicationsPage.vue'),
  // },
  // {
  //   path: '/work-with-us',
  //   name: 'WorkWithUs',
  //   component: () => import('../components/WorkWithUsPage.vue'),
  // },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('../views/ContacctUs.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
