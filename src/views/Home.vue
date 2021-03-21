<template>
  <div class="home">
    <v-container>
      <!--Links-->
      <v-row class="mt-2" v-if="inici">
        <v-col cols="12" sm="6" class="text-center text-sm-right">
          <v-btn width="112" @click="inici = false">Usuari</v-btn>
        </v-col>
        <v-col cols="12" sm="6" class="text-center text-sm-left">
          <v-btn width="112" to="/oferta/nova">Empresa</v-btn>
        </v-col>
      </v-row>
      <v-row class="mt-2" v-else>
        <v-col cols="12" sm="6" class="text-center text-sm-right">
          <v-btn width="112" to="/signin">Sign in</v-btn>
        </v-col>
        <v-col cols="12" sm="6" class="text-center text-sm-left">
          <v-btn width="112" to="/signup">Sign up</v-btn>
        </v-col>
      </v-row>
      <!--Ofertes registrades-->
      <v-row class="fill-height" align="center" justify="center">
        <v-col cols="12" class="text-center">
          Grafics ofertes per categories
        </v-col>
      </v-row>
      <!--Loading-->
      <v-row>
        <v-col cols="12" class="text-center">
          <v-progress-circular
            indeterminate
            class="primary--text"
            :width="2"
            :size="70"
            v-if="loading"
          ></v-progress-circular>
        </v-col>
      </v-row>
      <!--Carousel ofertes-->
      <v-row
        class="fill-height"
        align="center"
        justify="center"
        v-if="!loading"
      >
        <v-col cols="12">
          <v-carousel
            cycle
            height="200"
            hide-delimiter-background
            show-arrows-on-hover
          >
            <v-carousel-item
              v-for="(oferta, index) in ofertes"
              :key="index"
              :src="oferta.imageUrl"
              reverse-transition="fade-transition"
              transition="fade-transition"
            >
              <v-row class="fill-height" align="end" justify="center">
                <div class="display-1 mb-10 title">
                  {{ oferta.titol }}
                </div>
              </v-row>
            </v-carousel-item>
          </v-carousel>
        </v-col>
      </v-row>
      <!--Missatge de Benvinguda-->
      <v-row class="mt-3">
        <v-col cols="12" class="text-center">
          <p>Busca la teva oferta</p>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
  data: () => ({ inici: true }),
  computed: {
    ofertes() {
      return this.$store.getters.featuredOfertes;
    },
  },
};
</script>

<style scoped></style>
