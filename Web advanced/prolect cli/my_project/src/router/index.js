import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '../views/HomePageComp.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage
  },
  {
    path: '/blog',
    name: 'blog',
    component: () => import('../views/BlogPageComp.vue')
  },
  {
    path: '/detail',
    name: 'detail',
    component: () => import('../views/DetailsPageComp.vue')
  },
  {
    path: '/proj_comp',
    name: 'proj_comp',
    component: () => import('../views/ProjectComp.vue')
  },
  {
    path: '/proj_detail',
    name: 'proj_detail',
    component: () => import('../views/ProjectDetails.vue')
  },
  {
    path: '*',
    name: 'notfound',
    component: () => import('../views/NotFoundView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
