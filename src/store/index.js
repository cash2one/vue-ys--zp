import Vue from 'vue';
import Vuex from 'vuex';
import app from './modules/app';
import user from './modules/user';
import getters from './getters';
import account from './modules/account';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    app,
    user,
    account
  },
  getters
});

export default store
