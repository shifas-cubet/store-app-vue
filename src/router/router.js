import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        path: '/',
        redirect: '/app/products'
    },
    {
        path: '/sign-up',
        name: 'SignUp',
        component: () => import('@/components/SignUp/SignUp.vue')
    },
    {
        path: '/complete-registration',
        name: 'UserRegistration',
        component: () => import('@/components/Registration/UserRegistration.vue')
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import('@/components/Login/Login.vue')
    },
    {
        path: '/app',
        name: 'Home',
        component: () => import('@/components/Home.vue'),
        children: [
            {
                path: 'products',
                name: 'ProductsListing',
                component: () => import('@/components/Products/ProductsListing.vue')
            },
            {
                path: 'product/:id',
                name: 'ProductDetails',
                props: true,
                component: () => import('@/components/Products/ProductDetails.vue')
             },
             {
                path: 'cart',
                name: 'Cart',
                component: () => import('@/components/Cart/Cart.vue')
             }
        ]
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;