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

	
	{
		path: '/services/data',
		name: 'Data Collection',
		// route level code-splitting
		// this generates a separate chunk (projects.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () =>
			import(
				/* webpackChunkName: "projects" */ '../components/services/DataCollection.vue'
			),
		meta: {
			title: 'Melka - Data Collection',
		},
	},{
		path: '/services/mel',
		name: 'MEL',
		// route level code-splitting
		// this generates a separate chunk (projects.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () =>
			import(
				/* webpackChunkName: "projects" */ '../components/services/MonitoringAndEvaluation.vue'
			),
		meta: {
			title: 'Melka - MEL',
		},
	},
	{
		path: '/services/tech',
		name: 'Tech Support',
		// route level code-splitting
		// this generates a separate chunk (projects.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () =>
			import(
				/* webpackChunkName: "projects" */ '../components/services/TechSupport.vue'
			),
		meta: {
			title: 'Melka - Technical Support',
		},
	},
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
