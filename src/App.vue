<template>
  <v-app>
    <v-navigation-drawer
      class="deep-purple accent-4"
      src="https://cdn.vuetifyjs.com/images/backgrounds/bg-2.jpg"
      v-model="drawer"
      dark
      app
    >
      <Menu ></Menu>
    </v-navigation-drawer>

    <v-app-bar
      color="deep-purple accent-4"
      dark
      prominent
      app
      src="https://cdn.vuetifyjs.com/images/backgrounds/bg-2.jpg"
    >
      <v-app-bar-nav-icon @click="toggleDrawer()"></v-app-bar-nav-icon>

      <v-toolbar-title>{{ title }}</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-menu left bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon v-bind="attrs" v-on="on">
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item v-for="n in 5" :key="n" @click="() => {}">
            <v-list-item-title>Option {{ n }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>

    <!-- Sizes your content based upon application components -->
    <v-main>
      <!-- Provides the application the proper gutter -->
      <v-container fluid>
        <!-- If using vue-router -->
        <router-view></router-view>
      </v-container>
    </v-main>

    <v-footer app>
      <Footer></Footer>
    </v-footer>
  </v-app>
</template>

<script>
import Footer from './components/Footer.vue';
import Menu from './components/Menu.vue';

export default {
  components:{
    Menu,
    Footer
  },
  data() {
    return {
      title: "Mi pagina",
      drawer: false,
    };
  },
  methods: {
    toggleDrawer() {
      this.drawer = !this.drawer;
      this.title = this.drawer ? "Mi otra pagina" : "Cesar's page";
    },
  },
};
</script>
