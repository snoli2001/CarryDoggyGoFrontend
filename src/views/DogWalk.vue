<template>
    <div>
        <v-form>
            <v-card class="py-5 px-5 mx-5 my-5">
             <v-row align="center">
                <v-col
                    class="d-flex"
                    cols="6"
                    sm="6"
                >
                    <v-select
                    :items="cities"
                    name="city"
                    v-model="cityId"
                    label="Seleccione la ciudad"
                    item-text="name"
                    item-value="cityId"
                    required
                    @change="updateDistricts()"
                    ></v-select>
                </v-col>

                <v-col
                    class="d-flex"
                    cols="6"
                    sm="6"
                >
                    <v-select
                    :items="districts"
                    name="district"
                    v-model="districtId"
                    label="Seleccione un distrito"
                    item-text="name"
                    item-value="districtId"
                    :disabled="enable"
                    required
                    @change="updateDistricts()"
                    ></v-select>
                </v-col>
            </v-row>

            <v-row justify="center">
                <v-col
                    class="d-flex"
                    cols="6"
                    sm="6"
                >
                    <v-date-picker
                    v-model="date"
                    class="mt-4"
                    :min="today"
                    max="2022-03-20"
                    required
                    ></v-date-picker>
                </v-col>
                <v-col>
                    <v-time-picker
                        v-model="hour"
                        format="24hr"
                        required
                    ></v-time-picker>
                </v-col>
            
            </v-row>
            <v-row>
                <v-col
                    cols="6"
                    >
                    <v-text-field
                        type="number"
                        v-model="hours"
                        max="3"
                        label="Horas de paseo"
                    ></v-text-field>
                </v-col>

                <v-col
                    cols="6"
                    >
                    <v-text-field
                        v-model="address"
                        label="Direccion"
                    ></v-text-field>
                </v-col>
            </v-row>
            <v-row>
                <v-col>
                    <v-select
                        v-model="dogsIds"
                        :items="dogs"
                        item-text="name"
                        chips
                        label="seleccione los perros"
                        item-value="dogId"
                        multiple
                    ></v-select>
                </v-col>
                <v-col class="mt-2">
                    <v-text-field
                        v-model="aditionalInformation"
                        label="Información adicional"
                    ></v-text-field>
                </v-col>
            </v-row>


            <v-row d-flex justify="center">
                <v-btn color="primary" @click="createDogWalkInAgent()">
                    Agendar
                </v-btn>
            </v-row>
        </v-card>
        </v-form>

    </div>
</template>

<script>
  import {getCities} from '../service/CitiesService.js';
  import {getDistricts} from '../service/DistrictService.js';
  import {getDogsByDogOwnerId} from '../service/DogsService.js';
  import {createDogWalk} from '../service/DogWalksService.js';

  name: 'DogWalk';

  export default {

    data() {
      return {
        dogWalkerId: Number(this.$route.params.id),
        hours: null,
        aditionalInformation: null,
        paymentAmount: null,
        // date: Date,
        address: null,
        paymentTypeId: 1,
        dogsIds: [],
        dogs: [],
        cities: [],
        districts: [],
        cityId: 1,
        districtId: 1,
        enable: true,
        date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
        today: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString(),
        hour: ((new Date(Date.now()).getHours()).toString() + ':' + (new Date(Date.now()).getMinutes()).toString()),
        // rules

        hoursRules: [
          v => !!v || 'Ingrese el numero de horas del paseo'
        ],
        // addressRules:[
        //     v => !!v || 'Ingrese la dirección'
        // ],
        hourRules: [
          v => !!v || 'Seleccione la hora'
        ],
        addressRules: [
          v => !!v || 'Seleccione la hora'
        ]

      }
    },

    beforeCreate() {
      getCities()
          .then(response => this.cities = response);
      getDogsByDogOwnerId(1)
          .then(response => this.dogs = response);

    },
    created() {
      this.paymentAmount = this.$route.query.price;
      console.log(this.paymentAmount)
    },

    methods: {
      updateDistricts() {
        getDistricts(this.cityId)
            .then(response => this.districts = response);
        this.enable = false;
      },
      getDate() {
        let d = new Date(this.date);
        const [h, m] = this.hour.split(":")
        d.setUTCHours(h, m);
        return d.toISOString();
      },
      createDogWalkInAgent() {
        const selectedDate = this.getDate();
        let newDogWalk = {
          hours: Number(this.hours),
          aditionalInformation: this.aditionalInformation,
          paymentAmount: this.paymentAmount,
          dogWalkerId: this.dogWalkerId,
          date: selectedDate,
          address: this.address,
          dogsIds: this.dogsIds,
          paymentTypeId: this.paymentTypeId,
          districtId: this.districtId
        }

        createDogWalk(newDogWalk).then(resp => this.$router.push('/record'));
        

      }
    },

  }
</script>

<style>

</style>