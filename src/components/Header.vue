<template>
    <div>
        <v-navigation-drawer
                v-model="drawer"
                app
                >
                <v-list dense>
                    <v-list-item v-for="item in items" :key="item.title" link :to="item.route">
                        <v-list-item-action>
                            <v-icon>{{item.icon}}</v-icon>
                        </v-list-item-action>
                        <v-list-item-content>
                            <v-list-item-title>{{item.title}}</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </v-list>
        </v-navigation-drawer>
        
        <v-app-bar
                app
                color="indigo"
                dark
                >
                <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
                <v-toolbar-title>CarryDoggyGo</v-toolbar-title>
                <v-spacer></v-spacer>

                <v-btn
                    class="ma-2"
                    color="red lighten-1"
                    v-on:click ="notifications()"
                >
                  <v-icon>mdi-bell</v-icon>
                </v-btn>


                <v-btn
                    class="ma-2"
                    color="red lighten-1"
                    dark
                    v-on:click="logOut()"
                >
                    <v-icon
                    dark
                    left
                    >
                      mdi-arrow-left
                    </v-icon>Log out
                </v-btn>
        </v-app-bar>
    </div>
</template>

<script>
  import { mapActions, mapState} from 'vuex'

  export default {
    data: () => ({
      drawer: null,
      // items: [
      //   {icon: 'mdi-home', title: 'Inicio', route: '/home'},
      //   {icon: 'mdi-account-circle', title: 'Perfil', route: '/profile'},
      //   {icon: 'mdi-book', title: 'Historial', route: '/dogs'}
      // ]
      items: []
    }),

    created() {
      console.log(this.isDogOwner)
      if(this.isDogOwner){
        this.items = [
          {icon: 'mdi-home', title: 'Inicio', route: '/home'},
          {icon: 'mdi-account-circle', title: 'Perfil', route: '/profile'},
          {icon: 'mdi-book', title: 'Historial', route: '/record'}
        ]
      }else
      {
        this.items = [
          {icon: 'mdi-home', title:'Inicio', route:'/home'},
          {icon: 'mdi-account-circle', title:'Perfil', route:'/profileDogWalker'},
          {icon: 'mdi-view-module', title:'Paseos', route:'/dogwalkerDogWalks'},
          {icon: 'mdi-book', title:'Historial', route:'/dogWalkerRecord'}
        ]
      }
    },

    methods: {
      logOut(event) {
        // sessionStorage.clear();
        // this.LogOut();
        // localStorage.clear
        this.$router.push('/login');
      },
      ...mapActions([
        ''
      ]),
      //Metodo para que funcione mi boton notificacion by Alejo
      notifications(event){
        this.$router.push('/notifications');
      },
    },
    computed:{
      ...mapState([
          'isDogOwner'
      ])
    }
  }
</script>

