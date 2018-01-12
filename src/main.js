import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App';
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import index from './components/index/index';
import subpage from './components/subpage/subpage';
import detail from './components/detail/detail';

import 'common/common';

Vue.use(VueRouter);
Vue.use(ElementUI);

const routes = [
  {
    path: '/',
    component: index
  },
  {
    path: '/index',
    component: index
  },
  {
    path: '/subpage',
    component: subpage
  },
  {
    path: '/detail',
    component: detail
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
    index,
    subpage,
    detail
  }
}).$mount('#app');