import { createRouter, createWebHistory } from 'vue-router'
import store from '@/store/index.js'
import MyPosts from '@/views/MyPostsView.vue'
import Auth from '@/views/AuthView.vue'
import Register from '@/views/RegisterView.vue'

const routes = [
  {
    path: '/',
    redirect: '/posts'
  },
  {
    path: '/posts',
    name: 'posts',
    meta: {
      loginRequired: true
    },
    component: MyPosts,
  },
  {
    path: '/auth',
    name: 'auth',
    meta: {
      loginRequired: false
    },
    component: Auth,
    beforeEnter(to, from, next) {
      if (store.getters['user/GET_ACCESS']) {
          next({name: 'posts'})
      } else {
          next()
      }
    }
  },
  {
    path: '/register',
    name: 'register',
    meta: {
      loginRequired: false
    },
    component: Register,
    beforeEnter(to, from, next) {
      if (store.getters['user/GET_ACCESS']) {
          next({name: 'posts'})
      } else {
          next()
      }
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  if (to.meta.loginRequired && !store.getters['user/GET_ACCESS']) {
    next({name: 'auth'})
  } else next()
})

export default router
