// eslint-disable-next-line no-unused-vars
import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router';
import DefaultLayout from '@/layouts/DefaultLayout.vue';
import HomeView from '../views/01_Home/HomeView.vue';
import LoginView from '@/views/06_Auth/LoginView.vue';
import RegisterView from '@/views/06_Auth/RegisterView.vue';
import ForgetPasswordView from '@/views/06_Auth/ForgetPasswordView.vue';
import SearchView from '@/views/04_Search/SearchView.vue';
import CategoryView from '@/views/02_Category/CategoryView.vue';
import CartView from '@/views/03_Cart/CartView.vue';
import ProductView from '@/views/05_Product/ProductView.vue';

const routes = [
  {
    path: '/',
    component: DefaultLayout,
    children: [
      {
        path: '',
        name: 'home',
        component: HomeView,
      },
      {
        path: 'auth/login',
        name: 'login',
        component: LoginView,
      },
      {
        path: 'auth/register',
        name: 'register',
        component: RegisterView,
      },
      {
        path: 'auth/forgetPassword',
        name: 'forgetPassword',
        component: ForgetPasswordView,
      },
      {
        path: 'search',
        name: 'search',
        component: SearchView,
      },
      {
        path: 'category',
        name: 'category',
        component: CategoryView,
      },
      {
        path: 'cart',
        name: 'cart',
        component: CartView,
      },
      {
        path: 'product',
        name: 'product',
        component: ProductView,
      },
    ],
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

// *github page部署用
// const router = createRouter({
//   history: createWebHashHistory(import.meta.env.BASE_URL),
//   routes,
// })

export default router
