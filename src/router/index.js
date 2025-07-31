import { createRouter, createWebHistory } from 'vue-router'
import home from '@/components/home.vue'
import login from '@/components/login.vue'
import { auth } from '../firebase'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: home,
    meta: { requiresAuth: true },
  },
  {
    path: '/login',
    name: 'Login',
    component: login,
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  const user = auth.currentUser
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)

  if (requiresAuth && !user) {
    next('/login')
  } else {
    next()
  }
})

export default router