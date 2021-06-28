<template>
        <div class= "background">
        <v-container
            class="fill-height"
            fluid
            >
            <v-row
                align="center"
                justify="center"
            >
            <v-spacer></v-spacer>
                <v-col
                cols="12"
                sm="8"
                md="4"
                >
                <v-card class="elevation-12">
                    <v-toolbar
                    color="primary"
                    dark
                    flat
                    >
                    <v-spacer></v-spacer>
                    <v-toolbar-title>DogOwner</v-toolbar-title>
                    <v-spacer></v-spacer>
                    </v-toolbar>
                    <v-card-text>
                             <div class="dobackground"> 
                             </div>     
                    </v-card-text>
                    <v-card-actions>
                       <v-spacer></v-spacer>
                       <v-btn color="primary" align="center" v-on:click="SeeRegisterDO">I'm a DogOwner</v-btn>    
                       <v-spacer></v-spacer>
                    </v-card-actions>
                </v-card>
                </v-col>
                <v-spacer></v-spacer>
                 <v-col
                  cols="12"
                  sm="8"
                  md="4"
                 >
                <v-card class="elevation-12">
                    <v-toolbar
                    color="primary"
                    dark
                    flat
                    >
                    <v-spacer></v-spacer>
                    <v-toolbar-title>DogWalker</v-toolbar-title>
                    <v-spacer></v-spacer>
                    </v-toolbar>
                    <v-card-text>
                             <div class="dwbackground"> 
                             </div>     
                    </v-card-text>
                    <v-card-actions>
                       <v-spacer></v-spacer>
                       <v-btn color="primary" align="center" v-on:click="SeeRegisterDW">I'm a DogWalker</v-btn>    
                       <v-spacer></v-spacer>
                    </v-card-actions>
                </v-card>

                </v-col>
                <v-spacer></v-spacer>
            </v-row>
        </v-container>
    </div>
</template>

<script>
    export default {
          name:"Register",
                    
          methods: {
            
            SeeRegisterDW(event){
               this.$router.push('/dogwalkerregister');
            },
            SeeRegisterDO(event){
               this.$router.push('/dogownerregister');
            }

          }

    }

</script>

<style>
    .background {
        width: 100%;
        height: 100vh;
        background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url( '../assets/img/RegisterBackground.jpg');
        background-position: center right;
        background-repeat: no-repeat;
        background-size: cover;
        position: relative;
    }
    .dobackground {
        width: 100%;
        height: 50vh;
        background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url( '../assets/img/DogOwnerBG.jpg');
        background-position: center right;
        background-repeat: no-repeat;
        background-size: cover;
        position: relative;
        border-radius: 30px;
    }
    .dwbackground {
        width: 100%;
        height: 50vh;
        background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url( '../assets/img/DogWalkerBG.jpg');
        background-position: center right;
        background-repeat: no-repeat;
        background-size: cover;
        position: relative;
        border-radius: 30px;
    }
</style>