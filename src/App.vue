<template>
  <v-app id="inspire">
    <v-main>
      <Header v-if="this.loggedIn && this.isDogOwner"/>
      <HeaderDogWalker v-else-if="this.loggedIn && !this.isDogOwner"/>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import Header from "./components/Header.vue";
import Login from "./views/Login.vue";
import HeaderDogWalker from "./components/HeaderDogWalker";
import { mapState, mapGetters } from 'vuex';

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
    ...mapState([
        'isDogOwner'
    ]),
    ...mapGetters([
        'loggedIn'
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
