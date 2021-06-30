<template>
  <div v-if="this.isDogOwner">
    <v-container>
      <v-row justify="center" justify-md="start">
        <v-col class="col-12 col-sm-5 col-md-4"
               v-for="(dogWalker, index) in this.dogWalkers" :key="index">
          <dog-walker-card :dogwalker="dogWalker"/>
        </v-col>
      </v-row>
    </v-container>
  </div>
  <div v-else>
    <span>este es home del paseador de nombre: <b>{{ this.currentUSer.name }}</b> </span>
  </div>
</template>

<script>
  import DogWalkerCard from '../components/DogWalkerCard.vue';
  import { mapState } from 'vuex';

  export default {
    name: 'Home',

    components: {
      DogWalkerCard
    },

    computed: {
      ...mapState([
        'isDogOwner',
        'dogWalkers',
        'currentUSer'
      ])
    },

  }
</script>