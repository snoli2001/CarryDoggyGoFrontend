<template>
    <v-container fluid  v-if="dg.phone !== undefined">
        <v-row>
            <v-col cols="12" lg="4"  md="6"  >
                <v-card>
                    <v-card-title class="d-flex flex-column align-center">
                        <v-avatar
                            color="indigo"
                            size="100"
                        >
                            <span class="white--text text-h5">{{dg.name[0].toUpperCase()}}{{dg.lastName[0].toUpperCase()}}</span>
                        </v-avatar>
                        <v-card-title class="mt-2">{{dg.name | capitalize}} {{dg.lastName}}</v-card-title>
                    </v-card-title>
                </v-card>
            </v-col>
            <v-col cols="12" lg="4"  md="6"  >
                <v-card class="mt-5 indigo--text">
                    <v-card-title>
                        INFORMACIÓN
                    </v-card-title>
                     <v-card-text>
                        <h6 class="text-subtitle-1 font-weight-medium">
                            Teléfono: {{dg.phone.slice(0,3)}}-{{dg.phone.slice(3,6)}}-{{dg.phone.slice(6,9)}}
                        </h6>
                        <h6 class="text-subtitle-1 mt-3 font-weight-medium" >
                            Email: {{dg.email}}
                        </h6>
                        <h6 class="text-subtitle-1 mt-3 font-weight-medium" >
                            Descripcion: {{dg.description}}
                        </h6>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import {getDogWalkers} from "../service/DogWalkerService.js";

    export default {
        data() {
            return {
                dogwalker:[Object],
                id: this.$route.params.id,
                dg:Object
            }
        },
        created(){
            console.log(this.id);
        },

        beforeCreate(){
            getDogWalkers().then(res => {
            this.dogwalker = res;
            const dogWalkerId = this.id;
            console.log(dogWalkerId);
            this.dg = res.filter(dg => dg.dogWlakerId == dogWalkerId)[0];
          })
        }
        
    }
</script>