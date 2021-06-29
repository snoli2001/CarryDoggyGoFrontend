import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import DogWalkerProfile from '../components/DogWalkerProfile.vue'
import store from '../store'
import HomeDogWalker from "../views/HomeDogWalker";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Base',
    redirect: '/login',
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    meta: { requiresAuth: true }
  },
  {
    path: '/home-dogwalker',
    name: 'HomeDogWalker',
    component: HomeDogWalker,
    meta: { requiresAuth: true }
  },
  {
    path: '/profile',
    name: 'Profile',
    // component: () => import('../views/dogOwner/DogOwnerProfile.vue'),
    component: () => import('../components/DogWalkerProfile.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/dogwalks',
    name: 'DogWalk',
    // component: () => import('../views/dogOwner/DogOwnerProfile.vue'),
    component: () => import('../views/DogWalk.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/record',
    name: 'Record',
    // component: () => import('../views/dogOwner/DogOwnerProfile.vue'),
    component: () => import('../views/Record.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/dogs',
    name: 'Dogs',
    component: () => import('../views/dogOwner/Dogs.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/dogwalker/:id',
    name: 'DogWalkerProfile',
    component: DogWalkerProfile,
    meta: { requiresAuth: true }
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
    if(to.matched.some(route => route.meta.requiresAuth)){
      if(!store.state.loggedIn){
        next('/login')
      } else {
        next();
      }
    } else {
      next()
    }
})

export default router
