import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import './styles/common/common.scss';

createApp(App).use(router).mount('#app')