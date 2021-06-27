<template>
  <v-card
    class="mx-auto"
    color="indigo"
    dark
    max-width="400"
  >
    <v-card-title>
      <v-icon
        large
        left
      >
        mdi-message
      </v-icon>
      <span class="text-h6 font-weight-light">Notificacion {{notifications.dogOwnerNotificationId}}:</span>
    </v-card-title>

    <v-card-text class="text-h5 font-weight-bold">
      {{notifications.description}}
    </v-card-text>

    <v-card-actions>
      <v-list-item class="grow">
        <v-list-item-avatar color="grey darken-3">
          <v-icon> mdi-account</v-icon>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>For You</v-list-item-title>
        </v-list-item-content>

      </v-list-item>
    </v-card-actions>
  </v-card>
</template>

<script>
import {GetDogOwnerNotification} from '../service/DogOwnerNotificationService.js';  

    export default {
        data() {
            return {
             notifications:Object

            }
        },

         beforeCreate() {
             GetDogOwnerNotification(2).then(res => this.notifications = res);
        },

    }
</script>

<style>

</style>