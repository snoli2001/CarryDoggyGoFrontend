<template>
    <div>
         <div>
    <v-container>
      <v-row justify="center" justify-md="start">

        <div v-if="this.isDogOwner">
          <v-col class="col-12 col-sm-5 col-md-4"
                 v-for="(dogWalker, index) in this.dogWalkers" :key="index">
            <dog-walker-card :dogwalker="dogWalker"/>
          </v-col>
        </div>

        <div v-else>
          <v-col class="col-12 col-sm-5 col-md-4"
                 v-for="(dogOwner, index) in this.dogOwners" :key="index">
            <dog-walker-card :dogwalker="dogOwner"/>
          </v-col>
        </div>

      </v-row>
    </v-container>
  </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style>

</style>