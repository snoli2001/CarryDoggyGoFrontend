<template>
  <v-card
      class="mx-auto my-5 relative"
      max-width="500"
      min-width="350"
  >

    <v-card-title>
      <v-avatar
          color="primary"
          size="48"
          class="mr-2"
      >
        <span class="white--text text-h5">{{dogOwner.name[0]}}{{dogOwner.lastName[0]}}</span>
      </v-avatar>
      {{dogOwner.name}} {{dogOwner.lastName}}
      <v-btn
          x-small
          color="indigo lighten-2"
          text
          class="ml-2"
          v-on:click="seeProfile(dogOwner.dogOnwerId)"
          link
      >
        Ver perfil
      </v-btn>
    </v-card-title>


    <v-divider class="mx-4"></v-divider>

    <v-card-text>
      <h6 class="text-subtitle-1 font-weight-medium" >
        Teléfono: {{dogOwner.phone.slice(0,3)}}-{{dogOwner.phone.slice(3,6)}}-{{dogOwner.phone.slice(6,9)}}
      </h6>
      <h6 class="text-subtitle-1 font-weight-medium" >
          Email: {{dogOwner.email}}
      </h6>
    </v-card-text>
  </v-card>
</template>
<script>
    export default {
        props: ['dogOwner'],

         methods: {
            seeProfile(dogOnwerId) {
                this.$router.push('/dogOwner/'+ dogOnwerId);
            },
        }
    }
</script>

<style lang="scss" scoped>

</style>