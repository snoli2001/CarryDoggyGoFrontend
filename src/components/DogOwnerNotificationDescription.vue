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
      <span class="text-h6 font-weight-light">Notificacion {{id}}:</span>
    </v-card-title>

    <v-card-text class="text-h5 font-weight-bold">
      {{not.description}}
    </v-card-text>

    <v-card-actions>
      <v-list-item class="grow">
        <v-list-item-avatar color="grey darken-3">
          <v-icon> mdi-calendar-month-outline</v-icon>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>{{not.createdAt|formatDate}}</v-list-item-title>
        </v-list-item-content>

      </v-list-item>
    </v-card-actions>
  </v-card>
</template>

<script>
import {GetDogOwnerNotification} from '../service/DogOwnerNotificationService.js';  
import moment from "moment"

    export default {
        data() {
            return {
             notifications:[Object],
             id: this.$route.params.id,
             not:Object
            }
        },

        filters:{
            formatDate:function(value) {
                    if (value) {
                      return moment(String(value)).format('MM/DD/YYYY hh:mm')
                    }
           }        
        },

        beforeCreate() {
            GetDogOwnerNotification(2).then(res => { 
              this.notifications = res;
              const notificationid = this.id; 
              console.log(notificationid);
              this.not = res.filter(not => not.dogOwnerNotificationId == notificationid)[0];
            });
        },

      
    }
</script>

<style>

</style>