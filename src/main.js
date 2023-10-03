import { createApp } from 'vue';
import App from './App.vue';
import ZDClient from './services/ZDClient.js';
import './assets/main.css';

document.addEventListener('DOMContentLoaded', () => {
  const initVueApp = () => {
    createApp(App).mount('#app');
  };

  ZDClient.init();
  ZDClient.events['ON_APP_REGISTERED'](initVueApp);
});
