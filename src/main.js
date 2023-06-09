import { createApp } from 'vue'

import './index.css';
import './assets/main.css';

import { createPinia } from 'pinia'

import router from '@/router/router.js';
import axiosPlugin from '@/plugins/axios.js';

import App from './App.vue'

const app = createApp(App);
app.use(createPinia());
app.use(router);
app.use(axiosPlugin);
app.mount('#app');
