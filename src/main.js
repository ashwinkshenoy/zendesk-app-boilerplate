import Vue from 'vue'
import App from './App.vue'
import ZDClient from "./services/ZDClient.js";
 

Vue.config.productionTip = false

document.addEventListener('DOMContentLoaded', () => {
  const initVueApp = () => {
    new Vue({
      el: '#app',
      render: h => h(App),
    });
  };

  ZDClient.init();
  ZDClient.events['ON_APP_REGISTERED'](initVueApp);
});
