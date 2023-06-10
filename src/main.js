import { createApp } from 'vue'

import './index.css';

import { createPinia } from 'pinia'

import router from '@/router/router.js';
import axiosPlugin from '@/plugins/axios.js';

import App from './App.vue'
import toCurrency from './filters/currencyFilter';

import vuetify from './plugins/vuetify.js'

import { loadFonts } from './plugins/webfontloader.js';

loadFonts();

const app = createApp(App);
app.config.globalProperties.$toCurrency = toCurrency;
app.use(vuetify);
app.use(createPinia());
app.use(router);
app.use(axiosPlugin);
app.mount('#app');
