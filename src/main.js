import { createApp } from 'vue';
import App from './App.vue';
import router from './routes'; //load by default the routes/index.js

import '../public/css/bootstrap4/css/bootstrap.min.css';
import '../public/css/styles.css';

createApp(App).use(router).mount('#app');
