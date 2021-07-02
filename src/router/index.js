import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import store from '../store'
import HomeDogWalker from "../views/HomeDogWalker";
import LogOut from "../components/auth/LogOut";

import Register from '../views/Register.vue'
import DogWalkerProfile from '../components/DogWalkerProfile.vue'
import DogOwnerFormRegister from '../components/DogOwnerFormRegister.vue'
import DogWalkerFormRegister from '../components/DogWalkerFormRegister.vue'

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
    path: '/logout',
    name: 'logout',
    component: LogOut,
    meta: { requiresAuth: true }
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    meta: { requiresAuth: true }
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import('../views/dogOwner/DogOwnerProfile.vue'),
    // component: () => import('../components/DogWalkerProfile.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/dogwalks',
    name: 'DogWalks',
    // component: () => import('../views/dogOwner/DogOwnerProfile.vue'),
    component: () => import('../views/DogWalk.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/dogwalk/:id',
    name: 'DogWalk',
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

  // By Alejo
  {
    path: '/notifications',
    name: 'Notifications',
    component: () => import('../views/dogOwner/DogOwnerNotifications.vue'),
  },
  {
    path: '/dogWalkerDogWalks',
    name: 'DogWalkerDoWalks',
    component: () => import('../views/dogWalker/DogWalkerDogWalks.vue'),

    meta: { requiresAuth: true }
  },

  {
    path: '/notification/:id',
    name: 'DogOwnerNotification',
    component: () => import('../components/DogOwnerNotificationDescription.vue'),
  },
  {

    path: '/dogWalkerRecord',
    name: 'DogWalkerRecord',
    component: () => import('../views/dogWalker/DogWalkerRecord.vue'),
    meta: { requiresAuth: true }
  },

  {
    path: '/register',
    name: 'Register',
    component: Register,
  },

  {
    path: '/dogownerregister',
    name: 'DogOwnerRegister',
    component: DogOwnerFormRegister,
  },

  {
    path: '/dogwalkerregister',
    name: 'DogWalkerRegister',
    component: DogWalkerFormRegister,
  },
  {
    path: '/profileDogWalker',
    name: 'ProfileDogWalker',
    component: () => import('../views/dogWalker/DogWalkerUserProfile.vue'),
    meta: { requiresAuth: true }
  },

  {
    path: '/dogOwner/:id',
    name: 'DogOwnerProfile',
    component: () => import('../views/DogOwnerProfileRedirect.vue'),
    meta: { requiresAuth: true }
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!store.getters.loggedIn) {
      next({
        name: 'Login',
      })
    } else {
      next()
    }
  } else {
    next() // make sure to always call next()!
  }
})

export default router
