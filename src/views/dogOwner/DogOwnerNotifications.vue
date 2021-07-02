<template>
  <div>
    <v-container>
        <v-row justify="center" justify-md="start">
          <v-col class="col-12 col-sm-5 col-md-4" 
            v-for="(notification, index) in notifications" :key="index">
            <notification-card :notification="notification" />
          </v-col>
        </v-row>
    </v-container>
  </div>

</template>

<script>
  import NotificationCard from '../../components/NotificationCard.vue';
  import {GetDogOwnerNotification} from '../../service/DogOwnerNotificationService.js';  

  export default {
    name: 'DogOwnerNotifications',

    data () {
      return {
        notifications: Number,
      }
    },

    beforeCreate() {
      GetDogOwnerNotification(2).then(res => this.notifications = res);
    },

    components: {
      NotificationCard
    },


  }
</script>