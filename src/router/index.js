import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '@/views/Home.vue';
import Products from '@/views/Products.vue';
import Contract from '@/views/Contract.vue';
import Edit from '@/views/EditProduct.vue';

Vue.use(VueRouter);

const routes = [
    {
        path: '',
        component: Home,
    },
    {
        path: '/products',
        component: Products,
    },
    {
        path: '/product/:id',
        component: Edit,
    },
    {
        path: '/contract/:id',
        component: Contract,
    }
];

const router = new VueRouter({
    mode: 'history',
    linkActiveClass: 'open active',
    base: process.env.BASE_URL,
    routes,
});

export default router;
