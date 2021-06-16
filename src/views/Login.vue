<template>
    <div class="bg">
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
                    <v-toolbar-title>Login form</v-toolbar-title>
                    <v-spacer></v-spacer>
                    </v-toolbar>
                    <v-card-text>
                    <v-form>
                        <v-text-field
                        label="Login"
                        name="login"
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
                    </v-form>
                    </v-card-text>
                    <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="primary" v-on:click="login" >Login</v-btn>
                    </v-card-actions>
                </v-card>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
    export default {
        name: 'Login',
        methods: {
            login(event){
                this.Login();
                this.$router.push('/home');
            },
            ...mapActions([
                'Login'
            ])
        }
    }
</script>

<style>

    .bg {
        width: 100%;
        height: 100vh;
        background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url( '../assets/img/heroLoginImage.jpg');
        background-position: center right;
        background-repeat: no-repeat;
        background-size: cover;
        position: relative;
    }
</style>
