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
                    v-model="email"
                ></v-text-field>

                <v-text-field
                    id="password"
                    label="Password"
                    name="password"
                    prepend-icon="mdi-lock"
                    type="password"
                    v-model="password"
                ></v-text-field>
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="primary" @click="login">Login</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
  import { mapActions, mapState, mapGetters } from 'vuex'

  export default {
    name: 'Login',
    data: function () {
      return {
        email: '',
        password: ''
      }
    },
    methods: {
      login() {
        if (this.email.empty)
          return alert("Email obligatorio");

        let DogWalker = this.dogWalkers.find(x => x.email === this.email);
        let DogOwner = this.dogOwners.find(x => x.email === this.email);

        if (DogWalker !== undefined || DogOwner !== undefined){
          this.retrieveToken({
            email: this.email,
            password: this.password
          })
        }

        if(DogWalker !== undefined){
          this.setCurrentUser(DogWalker);
          this.setIsDogWalker();
          this.$router.push({ name:'Home' });
        }
        else if(DogOwner !== undefined){
          this.setCurrentUser(DogOwner);
          this.setIsDogOwner();
          this.$router.push({ name:'Home' });
        }
        else
          return alert("Usuario no existe");
      },
      ...mapActions([
        'getDogWalkers',
        'getDogOwners',
        'setCurrentUser',
        'retrieveToken',
        'destroyToken',
        'setIsDogOwner',
        'setIsDogWalker'
      ])
    },
    computed: {
      ...mapState([
        'dogWalkers',
        'dogOwners'
      ]),
      ...mapGetters([
        'loggedIn'
      ])
    },
    mounted() {
      this.getDogWalkers();
      this.getDogOwners();
      this.destroyToken();
    }
  }
</script>

<style>
  .bg {
    width: 100%;
    height: 100vh;
    background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('../assets/img/heroLoginImage.jpg');
    background-position: center right;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
  }
</style>
