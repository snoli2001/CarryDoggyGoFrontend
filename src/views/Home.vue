<template>
  <div>
    <v-container>
      

        <div v-if="this.isDogOwner">
          <v-row justify="center" justify-md="start">
            <v-col class="col-12 col-sm-5 col-md-4"
                    v-for="(dogWalker, index) in this.dogWalkers" :key="index">
              <dog-walker-card :dogwalker="dogWalker"/>
            </v-col>
          </v-row>
        </div>

        <div v-else>
          <v-row justify="center" justify-md="start">
            <v-col  class="col-12 col-sm-5 col-md-4"
                  v-for="(dogOwner, index) in this.dogOwners" :key="index">
              <dog-owner-card :dogOwner="dogOwner"/>
            </v-col>
          </v-row>
        </div>
    </v-container>
  </div>

</template>

<script>
  import DogWalkerCard from '../components/DogWalkerCard.vue';
  import { mapState } from 'vuex';
import DogOwnerCard from '../components/DogOwnerCard.vue';

  export default {
    name: 'Home',

    components: {
      DogWalkerCard,
        DogOwnerCard
    },

    computed: {
      ...mapState([
        'isDogOwner',
        'dogWalkers',
        'dogOwners',
        'currentUSer'
      ])
    },

  }
</script>