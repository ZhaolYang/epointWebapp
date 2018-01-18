import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    types: [{
      name: 'echarts',
      detail: [{
        name:'chart1'
      },{
        name:'chart2'
      },{
        name:'chart3'
      },{
        name:'chart4'
      }]
    },{
      name: 'type1'
    },{
      name: 'type2'
    }]
  },
  mutations: {}
})