<template>
  <v-card
    class="mx-auto my-5 relative"
    max-width="400"
    min-width="300"
  >
   
    <v-card-title>
         <v-avatar
            color="primary"
            size="48"
            class="mr-2"
        >
            <span class="white--text text-h5">{{dogwalker.name[0]}}{{dogwalker.lastName[0]}}</span>
        </v-avatar>
        {{dogwalker.name}} {{dogwalker.lastName}}  
        <v-btn
            x-small
            color="indigo lighten-2"
            text
            class="ml-2"
            v-on:click="seeProfile(dogwalker.dogWlakerId)"
            link
            >
            Ver perfil
        </v-btn>
    </v-card-title>

    <v-card-text>
      <v-row
        align="center"
        class="mx-0"
      >
        <v-rating
          :value="4.5"
          color="amber"
          dense
          half-increments
          readonly
          size="14"
        ></v-rating>
      </v-row>

      <div class="my-4 subtitle-1">
        Lima , Jesus María
      </div>
        
      <div>{{dogwalker.description.slice(0,70)}}...</div>
    </v-card-text>

    <v-divider class="mx-4"></v-divider>
    
    <v-card-text>
        <h6 class="text-subtitle-1 font-weight-medium" >
            Teléfono: {{dogwalker.phone.slice(0,3)}}-{{dogwalker.phone.slice(3,6)}}-{{dogwalker.phone.slice(6,9)}}
        </h6>

        <h6 class="text-subtitle-1 font-weight-medium teal--text" >
            Pago por hora: s/{{dogwalker.paymentAmount}}
        </h6>
    </v-card-text>

    <v-card-actions class="d-flex justify-center">
      <v-btn
        color="deep-purple accent-4 white--text"
        dark
        v-on:click="scheduleDogWalk(dogwalker.dogWlakerId)"
      >
        Agendar
      </v-btn>
      
    </v-card-actions>
  </v-card>
</template>

<script>
  export default {
    data: () => ({
      loading: false,
      selection: 1,
    }),

    methods: {
      reserve () {
        this.loading = true

        setTimeout(() => (this.loading = false), 2000)
      },

      seeProfile(dogWlakerId) {
        this.$router.push('/dogwalker/'+ dogWlakerId);
      },

      scheduleDogWalk(dogWlakerId){
        this.$router.push({
          path:'/dogwalk/'+ dogWlakerId,
          query: { price: this.dogwalker.paymentAmount }
        });  
      }
      

    },

    props: ['dogwalker']
    

  }
</script>


