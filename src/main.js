import 'normalize.css';
import './main.css';

import { createApp } from 'vue'
import App from './components/App/App.vue'
import router from './router';

const app = createApp(App);
app.use(router);
app.mount('#app');