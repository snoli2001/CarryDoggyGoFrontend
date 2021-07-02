<template>
        <div class = "bgdor">
        <v-container
            class="fill-height"
            fluid
            >
            <v-row
                align="center"
                justify="center"
            >
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
                    <v-toolbar-title>DogOwner Register</v-toolbar-title>
                    <v-spacer></v-spacer>
                    </v-toolbar>
                    <v-card-text>
                    <v-form>
                        <v-text-field
                        label="Email"
                        name="Email"
                        prepend-icon="mdi-email"
                        type="text"
                        v-model="Email"
                        ></v-text-field>

                        <v-text-field
                        name="Name"
                        label="Name"
                        prepend-icon="mdi-account"
                        type="text"
                        v-model="Name"
                        ></v-text-field>

                        <v-text-field
                        label="Last Name"
                        name="LastName"
                        prepend-icon="mdi-account"
                        type="text"
                        v-model="LastName"
                        ></v-text-field>

                        <v-text-field
                        id="password"
                        label="Password"
                        name="password"
                        prepend-icon="mdi-lock"
                        type="password"
                        v-model="Password"
                        ></v-text-field>

                        <v-text-field
                        label="Phone"
                        name="phone"
                        prepend-icon="mdi-phone"
                        type="text"
                        v-model="Phone"
                        ></v-text-field>

                        <v-text-field
                        label="Address"
                        name="address"
                        prepend-icon="mdi-message"
                        type="text"
                        v-model="Address"
                        ></v-text-field>
                        
                        <v-checkbox 
                        label = "Accept terms and conditions"
                        name="Accept"
                        ></v-checkbox> 
                         
                        <v-checkbox 
                        label = "Need to recieve notifications"
                        name="ReceiveNotifications"
                        ></v-checkbox> 

                    </v-form>
                    </v-card-text>
                    <v-card-actions>
                     <v-spacer></v-spacer>
                      <v-btn color="primary" v-on:click="createDogOwner" >Register Now</v-btn>    
                     <v-spacer></v-spacer>
                    </v-card-actions>
                </v-card>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>

import {PostDogOwner} from  '../service/DogOwnerService.js';

 export default {
        data(){
            return{
              Name: '',
              LastName:'',
              Email:'',
              Password:'',
              Phone:'',
              Address:'',
              DistrictId: Number
            }
        },

        methods:{
            createDogOwner() {
                let dogowner = {
                    name: this.Name,
                    lastname : this.LastName,
                    email : this.Email,
                    password : this.Password,
                    phone:this.Phone,
                    address:this.Address,
                    districtId: 1
                };
                PostDogOwner(dogowner).then(resp =>{
                      console.log(resp)
                      this.$router.push("/login");
                });
                }
        },
  
  }

</script>

<style>
.bgdor {
        width: 100%;
        height: 100vh;
        background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url( '../assets/img/BGDogOwner2.jpg');
        background-position: center right;
        background-repeat: no-repeat;
        background-size: cover;
        position: relative;
    }
</style>
