<template>
  <v-app id="inspire">
    <v-main>
      <Header v-if="loggedIn && this.isDogOwner"/>
      <HeaderDogWalker v-else-if="loggedIn && !this.isDogOwner"/>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import Header from "./components/Header.vue";
import Login from "./views/Login.vue";
import store from './store';
import HeaderDogWalker from "./components/HeaderDogWalker";
import { mapState } from 'vuex';

export default {
  name: 'App',

  data: () => ({
    visible: true,
  }),

  components: {
    Header,
    HeaderDogWalker,
    Login,
  },

  computed: {
    loggedIn() {
      return store.state.loggedIn;
    },
    ...mapState([
        'isDogOwner'
    ])
  },

  watch: {
    loggedIn: {
      inmediate: true,
      deep: false,
      handler(newValue, oldValue){
        console.log(newValue);
      }
    }
  }

};
</script>

<style>
  #inspire img {
    height: 100%
  }
</style>
