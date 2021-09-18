import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/supervisor',
    name: 'Supervisors',
    component: () => import('../views/Supervisor.vue')
  },
  {
    path: '/clock',
    name: 'Clock-in',
    component: () => import('../views/Clock.vue')
  },
  {
    path: '/user',
    name: 'Users',
    component: () => import('../views/user/Users.vue')
  },
  {
    path: '/user/new',
    name: 'Add Users',
    component: () => import('../views/user/UserNew.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
