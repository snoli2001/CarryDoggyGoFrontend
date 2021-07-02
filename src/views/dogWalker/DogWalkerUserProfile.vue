<template>

    <v-container fluid v-if="dogWalker.phone !== undefined">
        <v-row>
        <v-col cols="12" lg="4" md="6">
            <v-card>
            <v-card-title class="d-flex flex-column align-center">
                <v-avatar
                    color="indigo"
                    size="100"
                >
                <span
                    class="white--text text-h5">{{ dogWalker.name[0].toUpperCase() }}{{ dogWalker.lastName[0].toUpperCase() }}</span>
                </v-avatar>
                <v-card-title class="mt-2">{{ dogWalker.name | capitalize }} {{ dogWalker.lastName }}</v-card-title>
            </v-card-title>
            </v-card>
            <v-card class="mt-5 indigo--text">
            <v-card-title>
                INFORMACIÓN
            </v-card-title>
            <v-card-text>
                <h6 class="text-subtitle-1 font-weight-medium">
                Teléfono:
                {{ dogWalker.phone.slice(0, 3) }}-{{ dogWalker.phone.slice(3, 6) }}-{{ dogWalker.phone.slice(6, 9) }}
                </h6>
                <h6 class="text-subtitle-1 font-weight-medium">
                Email: {{dogWalker.email}}
                </h6>
                <h6 class="text-subtitle-1 mt-3 font-weight-medium green--text">
                Pago por hora: {{ dogWalker.paymentAmount }}
                </h6>
            </v-card-text>
            </v-card>
        </v-col>
        <v-col>
            <v-card class="py-5 px-5 indigo--text">
                <v-card-title>
                DESCRIPCIÓN
                </v-card-title>
                <v-card-text>
                    {{ dogWalker.description }}
                </v-card-text>
            </v-card>
        </v-col>
        </v-row>
    </v-container>
   
</template>

<script>
import { mapState } from 'vuex';

import { getDogWalkersById } from '../../service/DogWalkerService'
    export default {
        data() {
            return {
                dogWalker: null
            }
        },
        async created(){
            this.dogWalker = await getDogWalkersById(this.currentUSer.dogWlakerId)
        },

        computed: {
          ...mapState([
            'currentUSer'
          ])
        }
        
    }
</script>

<style>

</style>