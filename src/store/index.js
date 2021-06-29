import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loggedIn: sessionStorage.getItem('autenticado'),
    DogWalker: true
  },
  mutations: {
    loggedIn(state) {
      sessionStorage.setItem('autenticado', true);
      state.loggedIn = true;
    },
    loggedOut(state) {
      state.loggedIn = false
    }
  },
  actions: {
    Login(context) {
      context.commit('loggedIn')
    },
    LogOut(context) {
      context.commit('loggedOut')
    }
  },
  modules: {
  }
})
