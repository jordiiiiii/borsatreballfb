<template>
  <v-app>
    <v-card class="overflow-hidden">
      <v-sheet
        id="scrolling-techniques-7"
        class="overflow-y-auto"
        min-height="100vh"
        max-height="100vh"
      >
        <Header />
        <!--Main-->
        <v-main>
          <v-container fluid>
            <router-view></router-view>
          </v-container>
        </v-main>
        <!--Footer-->
        <!--        <v-footer padless class="transparent">-->
        <!--          <v-col class="grey&#45;&#45;text text&#45;&#45;lighten-1 text-center" cols="12">-->
        <!--            {{ new Date().getFullYear() }} — Alex-Arnau-Jordi-Rafa-->
        <!--          </v-col>-->
        <!--        </v-footer>-->
      </v-sheet>
    </v-card>
  </v-app>
</template>

<script>
import Header from "./components/Header";

export default {
  name: "App",

  components: {
    Header,
  },

  data: () => ({}),
};
</script>
