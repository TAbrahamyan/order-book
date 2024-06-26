import { createRouter, createWebHistory } from 'vue-router';
import OrderBook from '../views/OrderBookView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'order-book',
      component: OrderBook,
    },
    {
      path: '/settings',
      name: 'settings',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/SettingsView.vue' as string),
    },
  ],
});

export default router;
