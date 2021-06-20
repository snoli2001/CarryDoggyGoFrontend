<template>
  <div>
    <v-container>
        <v-row justify="center" justify-md="start">
          <v-col class="col-12 col-sm-5 col-md-4" 
            v-for="(dogWalker, index) in dogWalkers" :key="index">
            <dog-walker-card :dogwalker="dogWalker" />
          </v-col>
        </v-row>
    </v-container>
  </div>

</template>

<script>
  import DogWalkerCard from '../components/DogWalkerCard.vue';
  import {getDogWalkers} from '../service/DogWalkerService.js';  

  export default {
    name: 'Home',

    data () {
      return {
        dogWalkers: Number,
      }
    },

    beforeCreate() {
      getDogWalkers().then(res => this.dogWalkers = res);
    },

    components: {
      DogWalkerCard
    },


  }
</script>