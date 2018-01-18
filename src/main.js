import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import marked from 'common/lib/marked';
import type1 from './components/type1/type1';
import type2 from './components/type2/type2';
import echarts from './components/echarts/echarts';

import 'common/common';

Vue.use(VueRouter);
Vue.use(ElementUI);
Vue.use(marked);

const routes = [{
    path: '/',
    component: echarts
  },
  {
    path: '/type1',
    component: type1
  },
  {
    path: '/type2',
    component: type2
  },
  {
    path: '/echarts',
    component: echarts
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
    type2,
    echarts
  }
}).$mount('#app');