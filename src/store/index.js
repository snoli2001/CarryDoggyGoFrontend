import Vue from 'vue'
import Vuex from 'vuex'
import { getDogWalkers } from '../service/DogWalkerService'
import { getDogOwners } from '../service/DogOwnerService'
import axios from "axios";


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // loggedIn: sessionStorage.getItem('autenticado') || null,
    dogOwners: [],
    dogWalkers: [],
    error: '',
    loading: true,
    currentUSer: Object,
    isDogOwner: false,
    token: localStorage.getItem('access_token') || null,
  },
  mutations: {
    // loggedIn(state) {
    //   sessionStorage.setItem('autenticado', true);
    //   state.loggedIn = true;
    // },
    // loggedOut(state) {
    //   state.loggedIn = false
    // },

    //by gsinuiri
    retrieveToken(state, token){
      state.token = token;
    },
    destroyToken(state){
      state.token = null;
    },
    setDogWalkers(state, dogWalkers) {
      state.dogWalkers = dogWalkers
    },
    setDogOwners(state, dogOwners) {
      state.dogOwners = dogOwners
    },
    setCurrentUser(state, currentUSer) {
      state.currentUSer = currentUSer
    },
    setIsDogOwner(state) {
      state.isDogOwner = true
    },
    setIsDogWalker(state) {
      state.isDogOwner = false
    }
  },
  actions: {
    // Login(context) {
    //   context.commit('loggedIn')
    // },
    // LogOut(context) {
    //   context.commit('loggedOut')
    // },

    //by gsinuiri
    retrieveToken({commit}, credentials) {
      const token = credentials.email;
      localStorage.setItem('access_token', token);
      commit('retrieveToken', token);
    },

    destroyToken({ commit, getters, state }) {
      axios.defaults.headers.common['Authorization'] = 'Bearer ' + state.token

      if (getters.loggedIn) {
        localStorage.removeItem('access_token');
        commit('destroyToken')
      }

    },

    setCurrentUser({ commit }, currentUser) {
      commit('setCurrentUser', currentUser)
    },

    async getDogWalkers({ commit }) {
      try {
        commit('setDogWalkers', await getDogWalkers())
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
        commit('setDogOwners', await getDogOwners())
      }catch (e){
        this.error = 'Error obteniendo datos'
        console.log(e)
      }
      finally {
        this.loading = false
      }
    },
    setIsDogOwner({ commit }) {
      commit('setIsDogOwner')
    },
    setIsDogWalker({ commit }) {
      commit('setIsDogWalker')
    },
  },

  getters:{
    loggedIn(state){
      return state.token !== null
    }
  }

})
