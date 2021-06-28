import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import DogWalkerProfile from '../components/DogWalkerProfile.vue'
import DogOwnerFormRegister from '../components/DogOwnerFormRegister.vue'
import DogWalkerFormRegister from '../components/DogWalkerFormRegister.vue'
import store from '../store'

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
    path: '/profile',
    name: 'Profile',
    component: () => import('../views/dogOwner/DogOwnerProfile.vue'),
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
    meta: { requiresAuth: true }
  },

  {
    path: '/notification/:id',
    name: 'DogOwnerNotification',
    component: () => import('../components/DogOwnerNotificationDescription.vue'),
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
