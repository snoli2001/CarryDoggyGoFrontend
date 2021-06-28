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
                        name="email"
                        prepend-icon="mdi-email"
                        type="text"
                        ></v-text-field>

                        <v-text-field
                        label="Name"
                        name="name"
                        prepend-icon="mdi-account"
                        type="text"
                        ></v-text-field>

                        <v-text-field
                        id="password"
                        label="Password"
                        name="password"
                        prepend-icon="mdi-lock"
                        type="password"
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
                      <v-btn color="primary" v-on:click="register" >Register Now</v-btn>    
                     <v-spacer></v-spacer>
                    </v-card-actions>
                </v-card>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>

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
