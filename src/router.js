import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/views/Dashboard.vue'
import Settings from '@/views/Settings.vue'
import Profile from '@/views/Profile.vue'
import Auth from '@/views/Auth.vue'
import Events from '@/views/Events.vue'
import Places from '@/views/Places.vue'
import QrScanner from '@/views/QrScanner.vue'
import Mapbox from '@/components/Mapbox.vue'
import Chat from '@/components/Chat.vue'
import ExternalApiView from "./views/ExternalApi.vue";
import { authGuard } from "./auth/authGuard";
import firebase from 'firebase'


Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '*',
      redirect: '/auth'
    },
    {
      path: '/',
      redirect: '/auth'
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/external-api",
      name: "external-api",
      component: ExternalApiView,
      beforeEnter: authGuard
    },
    {
      path: '/events',
      name: 'events',
      component: Events,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/chat',
      name: 'chat',
      component: Chat,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/places',
      name: 'places',
      component: Places,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/qrscanner',
      name: 'qrscanner',
      component: QrScanner,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/settings',
      name: 'settings',
      component: Settings,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/map',
      name: 'map',
      component: Mapbox,
      meta: {
        requiresAuth: true
      }
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


