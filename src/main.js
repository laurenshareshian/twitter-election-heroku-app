import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import router from './router';
import './main.css';

Vue.config.productionTip = false;
// step 1: tell Vue about the VueRouter
Vue.use(VueRouter);
Vue.component('RouterLink', Vue.component('router-link'));
Vue.component('RouterView', Vue.component('router-view'));

new Vue({
  // step 2: pass in router object
  router,
  render: h => h(App)
}).$mount('#app');