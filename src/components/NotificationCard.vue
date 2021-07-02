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
            <span class="white--text text-h5">{{notification.dogOwnerNotificationId}}</span>
        </v-avatar>
        <v-btn
            small
            color="indigo lighten-2"
            text
            class="ml-2"
            v-on:click="seeNotification(notification.dogOwnerNotificationId)"
            link
            >
            Detalle de Notificacion
        </v-btn>
    </v-card-title>
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
      seeNotification(dogOwnerNotificationId) {
        this.$router.push('/notification/'+ dogOwnerNotificationId);
      }
    },

    props: ['notification']
    
  }
</script>


