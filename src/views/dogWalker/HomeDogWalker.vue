<!--<template>-->
<!--    <div>-->
<!--        <HeaderDogWalker/>-->
<!--        <h1 class="mt-5 ml-10"> Mis paseos</h1>-->
<!--        <v-card class="mt-5 mx-10 px-5 py-5" v-for="(dogWalk, index) in dogWalks" :key="index">-->
<!--            <v-row>-->
<!--                <v-col>-->
<!--                    Dirección: {{dogWalk.address}}-->
<!--                </v-col>-->
<!--            </v-row>-->
<!--            -->
<!--            <v-row>-->
<!--                <v-col>-->
<!--                    Horas de paseo: {{dogWalk.hours}}-->
<!--                </v-col>-->
<!--            </v-row>-->
<!--            -->
<!--            <v-row>-->
<!--                <v-col>-->
<!--                    Dia: {{dogWalk.date.slice(0,10)}}-->
<!--                </v-col>-->
<!--            </v-row>-->

<!--            <v-row>-->
<!--                <v-col>-->
<!--                    Hora: {{dogWalk.date.slice(11,16)}}-->
<!--                </v-col>-->
<!--            </v-row>-->

<!--            -->
<!--            <v-row>-->
<!--                <v-col>-->
<!--                    Información adicional: {{dogWalk.aditionalInformation}}-->
<!--                </v-col>-->
<!--            </v-row>-->
<!--            <v-row>-->
<!--               <v-card-actions class="d-flex justify-center">-->
<!--                    <v-btn-->
<!--                        color="green accent-4 white&#45;&#45;text"-->
<!--                        dark-->
<!--                        v-on:click="console.log(hola)"-->
<!--                    >-->
<!--                        Aceptar-->
<!--                    </v-btn>-->
<!--                    <v-btn-->
<!--                        color="red accent-4 white&#45;&#45;text"-->
<!--                        dark-->
<!--                        v-on:click="console.log(hola)"-->
<!--                    >-->
<!--                        Rechazar-->
<!--                    </v-btn>-->
<!--                </v-card-actions>-->
<!--            </v-row>-->
<!--            -->
<!--        </v-card>-->
<!--    </div>-->
<!--</template>-->

<!--<script>-->
<!--import HeaderDogWalker from "../dogWalker/HeaderDogWalker.vue"-->
<!--import {getDogWalkByDogWalkerId} from '../../service/DogWalksService'-->
<!--    export default {-->

<!--        data(){-->
<!--            return{-->
<!--                dogWalks: Array-->
<!--            }-->
<!--        },-->

<!--        beforeCreate(){-->
<!--            getDogWalkByDogWalkerId(1).then(resp => this.dogWalks = resp)-->
<!--        },-->

<!--        components: {-->
<!--            HeaderDogWalker-->
<!--        }-->
<!--    }-->
<!--</script>-->
