import { createRouter, createWebHistory } from 'vue-router';
import DefaultLayout from '@/layouts/DefaultLayout.vue';
import HomeView from '../views/HomeView.vue';
import LoginView from '@/views/auth/LoginView.vue';
import RegisterView from '@/views/auth/RegisterView.vue';
import ForgetPasswordView from '@/views/auth/ForgetPasswordView.vue';
import SearchView from '@/views/SearchView.vue';

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
    ],
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
