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
            <v-row> 
               <v-card-actions class="d-flex justify-center"> 
                    <v-btn v-if="dogWalk.state == 0"
                        color="green accent-4 white&#45;&#45;text" 
                        dark 
                        v-on:click.prevent="startDogWalk(dogWalk.dogWalkId)" 
                    > 
                        Comenzar 
                    </v-btn> 
                    <v-btn v-if="dogWalk.state == 0"
                        color="red accent-4 white&#45;&#45;text" 
                        dark 
                        v-on:click="cancelDogWalk(dogWalk.dogWalkId)" 
                    > 
                        Rechazar 
                    </v-btn>

                     <v-btn v-if="dogWalk.state == 1"
                        color="warning accent-4 white&#45;&#45;text" 
                        dark 
                        v-on:click="finishDogWalk(dogWalk.dogWalkId)" 
                    > 
                        Finalizar 
                    </v-btn>  
                </v-card-actions> 
            </v-row> 
             
        </v-card> 
    </div> 
</template>
<script> 
import {finishDogWalk, getDogWalkByDogWalkerId} from '../../service/DogWalksService' 
import { mapState } from 'vuex';
import { startDogWalk } from '../../service/DogWalksService'
import { cancelDogWalk } from '../../service/DogWalksService'
    
    export default {
        data(){ 
            return{ 
                dogWalks: [] 
            } 
        },
        methods:{
            async startDogWalk(id){
                startDogWalk(id)
                await startDogWalk(id);
                this.dogWalks = await getDogWalkByDogWalkerId(this.currentUSer.dogWlakerId)
                this.dogWalks = this.dogWalks.filter(d => d.state < 2)
                this.dogWalks = this.dogWalks.reverse() 
            },
            async cancelDogWalk(id){
                await cancelDogWalk(id);
                this.dogWalks = await getDogWalkByDogWalkerId(this.currentUSer.dogWlakerId)
                this.dogWalks = this.dogWalks.filter(d => d.state < 2)
                this.dogWalks = this.dogWalks.reverse() 
            },
            async finishDogWalk(id){
                await finishDogWalk(id);
                this.dogWalks = await getDogWalkByDogWalkerId(this.currentUSer.dogWlakerId)
                this.dogWalks = this.dogWalks.filter(d => d.state < 2)
                this.dogWalks = this.dogWalks.reverse() 
            }
        },
        async created(){ 
            this.dogWalks = await getDogWalkByDogWalkerId(this.currentUSer.dogWlakerId);
            this.dogWalks = this.dogWalks.filter(d => d.state < 2)
            this.dogWalks = this.dogWalks.reverse()  
        },
        
        computed: {
            ...mapState([
                'currentUSer',
                'dogOwners'
            ]),
        }
    } 
</script> 
