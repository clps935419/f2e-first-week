import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import SpotPage from '../views/SpotPage.vue';

import RestaurantPage from '../views/RestaurantPage.vue';
import TransportPage from '../views/TransportPage.vue';

//Transport.vue
const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/spot',
        name: 'spot',
        component: SpotPage,
    },
    {
        path: '/restaurant',
        name: 'restaurant',
        component: RestaurantPage,
    },
    {
        path: '/transport',
        name: 'transport',
        component: TransportPage,
    },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
