<template> 
    <div> 
        <h1 class="mt-5 ml-10"> Mis paseos</h1> 
        <v-card class="mt-5 mx-10 px-5 py-5" v-for="(dogWalk, index) in dogWalks" :key="index"> 
            <v-row> 
                <v-col> 
                    Dirección: {{dogWalk.address}} 
                </v-col> 
            </v-row> 
             
            <v-row> 
                <v-col> 
                    Horas de paseo: {{dogWalk.hours}} 
                </v-col> 
            </v-row> 
             
            <v-row> 
                <v-col> 
                    Dia: {{dogWalk.date.slice(0,10)}} 
                </v-col> 
            </v-row>
            <v-row> 
                <v-col> 
                    Hora: {{dogWalk.date.slice(11,16)}} 
                </v-col> 
            </v-row>
             
            <v-row> 
                <v-col> 
                    Información adicional: {{dogWalk.aditionalInformation}} 
                </v-col> 
            </v-row>

            <v-row d-flex class="justify-end">
                <span v-if="dogWalk.state == 3" class="red--text mr-4">Cancelado</span>
                <span v-if="dogWalk.state == 2" class="warning--text mr-4">Finalizado</span>
            </v-row>
             
        </v-card> 
    </div> 
</template>
<script>
import {getDogWalkByDogWalkerId} from '../../service/DogWalksService' 
import { mapState } from 'vuex';
    export default {
         data(){ 
            return{ 
                dogWalks: [] 
            } 
        },
        async created(){ 
            this.dogWalks = await getDogWalkByDogWalkerId(this.currentUSer.dogWlakerId);
            this.dogWalks = this.dogWalks.filter(d => d.state >= 2) 
        },

        computed: {
            ...mapState([
                'currentUSer',
                'dogOwners'
            ]),
        }
    }
</script>

<style lang="scss" scoped>

</style>