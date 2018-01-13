import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    types: [{
      name: 'type1',
      detail: []
    },{
      name: 'type2',
      detail: []
    }]
  },
  mutations: {}
})