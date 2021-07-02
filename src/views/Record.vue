<template>
  <v-data-table
      :headers="headers"
      :items="dogWalksFilter"
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
      dogWalksFilter: [],
      headers: [
        { text: 'Fecha', value: 'date' },
        { text: 'Dirección', value: 'address' },
        { text: 'Hora(s)', value: 'hours' },
        { text: 'Monto pago', value: 'paymentAmount' },
        { text: 'Información adicional', value: 'aditionalInformation' },
          // TODO: Mostrar paseador
        { text: 'Paseador', value: 'paseador' },
      ],
    }
  },
  created() {
    getAllDogWalksByDogOwnerId(this.currentUSer.dogOnwerId)
        .then(resp => {
          this.dogWalks = resp;

          this.dogWalks = resp.map(dogwalk => {
            let currentDogWalker = this.dogWalkers.find(x=>x.dogWlakerId === dogwalk.dogWalkerId);
            this.dogWalksFilter.push(
                {...dogwalk, 'paseador': currentDogWalker.name + " " + currentDogWalker.lastName}
            );
          });

          console.log(this.dogWalkers)
        });
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