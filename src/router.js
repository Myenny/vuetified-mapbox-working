import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from './views/Dashboard.vue'
import Settings from './views/Settings.vue'
import Profile from './views/Profile.vue'
import Auth from './views/Auth.vue'
import Mapbox from '@/components/Mapbox.vue'
import { authGuard } from "./auth/authGuard";
// import firebase from 'firebase'


Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '*',
      redirect: '/profile'
    },
    {
      path: '/',
      redirect: '/profile'
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard,
      beforeEnter: authGuard
    },
    {
      path: '/settings',
      name: 'settings',
      component: Settings,
      beforeEnter: authGuard
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile,
      beforeEnter: authGuard
    },
    {
      path: '/map',
      name: 'map',
      component: Mapbox,
      beforeEnter: authGuard
    },
    {
      path: '/auth',
      name: 'auth',
      component: Auth,
    },
  ]
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (!firebase.auth().currentUser) {
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      })
    } else {
      next()
    }
  } else {
    next() // make sure to always call next()!
  }
})

export default router;


