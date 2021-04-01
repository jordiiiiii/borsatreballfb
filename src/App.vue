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
