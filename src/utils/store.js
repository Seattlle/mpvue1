import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    footerCurrentTab:''
  },
  mutations: {
    switchTab(state,key){
      state.footerCurrentTab=key;
    }
  },
  actions: {

  },
  modules: {

  }
});

export default store;
