import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  // Scroll behavior to scroll back to top on route change
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/tentang',
      name: 'tentang',
      component: () => import('../views/TentangView.vue'),
    },
    {
      path: '/kompetisi/:id',
      name: 'kompetisi-detail',
      component: () => import('../views/KompetisiDetailView.vue'),
    },
    {
      path: '/faq',
      name: 'faq',
      component: () => import('../views/FAQView.vue'),
    },
    {
      path: '/daftar',
      name: 'daftar',
      component: () => import('../views/DaftarView.vue'),
    },
    // 404 Not Found page
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: () => import('../views/NotFoundView.vue')
    }
  ],
})

// Reset scroll natively before each navigation hook to avoid GSAP content flash/jank
router.beforeEach((to, from, next) => {
  window.scrollTo(0, 0)
  next()
})

export default router
