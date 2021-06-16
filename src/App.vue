<template>
  <v-app id="inspire">
    <v-main>
      <Header v-if="loggedIn"/>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import Header from "./components/Header.vue"
import Login from "./views/Login.vue"
import store from './store'

export default {
  name: 'App',

  data: () => ({
    visible: true,
  }),

  components: {
    Header,
    Login,
  },

  computed: {
    loggedIn() {
      return store.state.loggedIn;
    }
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
