/**
 * Created by wang on 2017/5/13.
 */
import Cookies from 'js-cookie';
import {getAccountsByUserId} from 'api/account'

const account = {
  state: {
    appid: '',
    status: '',
    name: '',
    account_name: '',
    token: '',
    icon: '',
    accounts: []
  },

  mutations: {
    SET_USER_ACCOUNTS: (state, accounts) => {
      state.accounts = accounts;
    }
  },

  actions: {
    getAccountsByUser({ commit }, userInfo) {
      const userId = userInfo.uid;
      return new Promise((resolve, reject) => {
        getAccountsByUserId(userId).then(response => {
          const data = response.data;
          commit('SET_USER_ACCOUNTS', data);
          resolve();
        }).catch(error => {
          reject(error);
        });
      });
    },
  }
};

export default account;
