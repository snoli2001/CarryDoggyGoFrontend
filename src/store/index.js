import Vue from 'vue'
import Vuex from 'vuex'
import { getDogWalkers } from '../service/DogWalkerService'
import { getDogOwners } from '../service/DogOwnerService'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loggedIn: sessionStorage.getItem('autenticado'),
    dogOwners: [],
    dogWalkers: [],
    error: '',
    loading: true,
    currentUSer: Object,
    isDogOwner: false
  },
  mutations: {
    loggedIn(state) {
      sessionStorage.setItem('autenticado', true);
      state.loggedIn = true;
    },
    loggedOut(state) {
      state.loggedIn = false
    },
    SET_DOG_WALKERS(state, dogWalkers) {
      state.dogWalkers = dogWalkers
    },
    SET_DOG_OWNERS(state, dogOwners) {
      state.dogOwners = dogOwners
    },
    SET_CURRENT_USER(state, currentUSer) {
      state.currentUSer = currentUSer
    },
    IS_DOG_OWNER(state) {
      state.isDogOwner = true
    },
    IS_DOG_WALKER(state) {
      state.isDogOwner = false
    }
  },
  actions: {
    Login(context) {
      context.commit('loggedIn')
    },
    LogOut(context) {
      context.commit('loggedOut')
    },
    setCurrentUser({ commit }, currentUser) {
      commit('SET_CURRENT_USER', currentUser)
    },
    isDogOwner({ commit}) {
      commit('IS_DOG_OWNER')
    },
    isDogWalker({ commit}) {
      commit('IS_DOG_WALKER')
    },
    async getDogWalkers({ commit }) {
      try {
        commit('SET_DOG_WALKERS', await getDogWalkers())
      }catch (e){
        this.error = 'Error obteniendo datos'
        console.log(e)
      }
      finally {
        this.loading = false
      }
    },
    async getDogOwners({ commit }) {
      try {
        commit('SET_DOG_OWNERS', await getDogOwners())
      }catch (e){
        this.error = 'Error obteniendo datos'
        console.log(e)
      }
      finally {
        this.loading = false
      }
    }
  },
  modules: {
  }
})
