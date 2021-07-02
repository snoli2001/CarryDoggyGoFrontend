<template>
  <v-data-table
      :headers="headers"
      :items="dogWalks"
      :items-per-page="5"
      class="elevation-1"
  ></v-data-table>
</template>

<script>
import { getAllDogWalksByDogOwnerId } from "../service/DogOwnerService";
import { getDogWalkersById} from "../service/DogWalkerService";
import { mapState } from 'vuex';

export default {
  name: "Record",

  data: function () {
    return {
      dogWalks: [],
      headers: [
        { text: 'Fecha', value: 'date' },
        { text: 'Dirección', value: 'address' },
        { text: 'Hora(s)', value: 'hours' },
        { text: 'Monto pago', value: 'paymentAmount' },
        { text: 'Información adicional', value: 'aditionalInformation' },
          // TODO: Mostrar paseador
        { text: 'Paseador', value: 'dogWalker' },
      ],
    }
  },
  async created() {
    this.dogWalks = await getAllDogWalksByDogOwnerId(this.currentUSer.dogOnwerId);
    this.dogWalks = await Promise.all(this.dogWalks.map( async (dogWalk) => {
      const dogWalker = await getDogWalkersById(dogWalk.dogWalkerId);
      dogWalk.dogWalker = dogWalker.name + " " + dogWalker.lastName
      return dogWalk 
    }));
  },
  computed:{
    ...mapState([
      'currentUSer',
      'dogWalkers'
    ])
  }

}

</script>

<style scoped>

</style>