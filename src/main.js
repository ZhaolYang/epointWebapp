import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App';
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import type1 from './components/type1/type1';
import type2 from './components/type2/type2';

import 'common/common';

Vue.use(VueRouter);
Vue.use(ElementUI);

const routes = [
  {
    path: '/',
    component: type1
  },
  {
    path: '/type1',
    component: type1
  },
  {
    path: '/type2',
    component: type2
  }
];

const router = new VueRouter({
  routes,
  linkActiveClass: 'active'
});

const app = new Vue({
  router,
  components: {
    App,
    type1,
    type2
  }
}).$mount('#app');