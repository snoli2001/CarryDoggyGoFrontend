<template>
  <v-container fluid v-if="dogOwner.phone !== undefined">
    <v-row>
      <v-col cols="12" lg="4" md="6">
        <v-card>
          <v-card-title class="d-flex flex-column align-center">
            <v-avatar
                color="indigo"
                size="100"
            >
              <span
                  class="white--text text-h5">{{ dogOwner.name[0].toUpperCase() }}{{ dogOwner.lastName[0].toUpperCase() }}</span>
            </v-avatar>
            <v-card-title class="mt-2">{{ dogOwner.name | capitalize }} {{ dogOwner.lastName }}</v-card-title>
          </v-card-title>
        </v-card>
        <v-card class="mt-5 indigo--text">
          <v-card-title>
            INFORMACIÓN
          </v-card-title>
          <v-card-text>
            <h6 class="text-subtitle-1 font-weight-medium">
              Teléfono:
              {{ dogOwner.phone.slice(0, 3) }}-{{ dogOwner.phone.slice(3, 6) }}-{{ dogOwner.phone.slice(6, 9) }}
            </h6>
            <h6 class="text-subtitle-1 mt-3 font-weight-medium">
              Dirección: {{ dogOwner.address }}
            </h6>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col>
        <v-card class="px-5">
          <v-card-title class="indigo--text">
            PERROS
          </v-card-title>
          <v-row v-if="dogs.length > 0">
            <v-col cols="12" md="6" v-for="(dog, index) in dogs" :key="index">
              <v-card
                  outlined
                  elevation="1"
              >
                <v-card-title class="d-flex flex-column align-center">
                  <v-list-item-avatar
                      size="90"
                  >
                    <v-img src="../assets/img/dogExampleImage.jpg" alt="dogImage">
                    </v-img>
                  </v-list-item-avatar>

                  <v-card-title class="mr-5 mt-n5">{{ dog.name }}</v-card-title>
                  <v-card-subtitle class="mr-5 text-h6">{{ dog.race }}</v-card-subtitle>
                </v-card-title>
                <v-divider class="mt-n5"></v-divider>
                <v-card-text class="text-center ">
                  <div class="mr-5">
                    {{ dog.description }}
                  </div>
                </v-card-text>
                <v-card-actions class="d-flex mr-5 justify-center">
                  <v-btn
                      text
                      color="teal accent-4"
                  >
                    Ver
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
          <h1 v-else class="ml-3"> No tiene ningun perro todavia </h1>

        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import {getDogOwnerById} from '../service/DogOwnerService.js';  
  import {getDogsByDogOwnerId} from '../service/DogsService';

    export default {
        data(){
            return {
                id: this.$route.params.id,
               dogs: [],
               dogOwner: null, 
            }
        },

        
        created() {
             getDogOwnerById(this.id).then(res => this.dogOwner = res);
             getDogsByDogOwnerId(this.id).then(res => this.dogs  = res);
        },


       filters: {
            capitalize: function (value) {
                if (!value) return ''
                value = value.toString()
                return value.charAt(0).toUpperCase() + value.slice(1)
            }
        },
    }
</script>
