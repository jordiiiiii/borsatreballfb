<template>
  <v-container>
    <v-row v-for="oferta in ofertes" :key="oferta.id">
      <v-col>
        <v-card class="mx-auto" max-width="344">
          <v-img :src="oferta.imageUrl" height="150px">
            <div class="ma-2">
              {{ oferta.categoria }}
            </div>
          </v-img>

          <v-card-title v-text="oferta.titol"></v-card-title>

          <v-card-subtitle> {{ oferta.data | formatData }} </v-card-subtitle>

          <v-card-actions>
            <v-btn color="orange lighten-2" text :to="'/ofertes/' + oferta.id">
              Explorar
            </v-btn>

            <v-spacer></v-spacer>

            <v-btn icon @click="show = !show">
              <v-icon>{{
                show ? "mdi-chevron-up" : "mdi-chevron-down"
              }}</v-icon>
            </v-btn>
          </v-card-actions>

          <v-expand-transition>
            <div v-show="show">
              <v-divider></v-divider>

              <v-card-text>
                {{ oferta.descripcio }}
              </v-card-text>
            </div>
          </v-expand-transition>
        </v-card>
      </v-col>
    </v-row>
    <v-btn-toggle class="filtres" v-model="toggle_exclusive" mandatory>
      <v-col>
        <v-row class="mb-2">
          <v-btn fab small color="cyan accent-2"> all </v-btn>
        </v-row>
        <v-row class="mb-2">
          <v-btn fab small color="cyan accent-2"> asix </v-btn>
        </v-row>
        <v-row class="mb-2">
          <v-btn fab small color="cyan accent-2"> dam </v-btn>
        </v-row>
        <v-row class="mb-2">
          <v-btn fab small color="cyan accent-2"> daw </v-btn>
        </v-row>
        <v-row class="mb-2">
          <v-btn fab small color="cyan accent-2"> smx </v-btn>
        </v-row>
      </v-col>
    </v-btn-toggle>
  </v-container>
</template>

<script>
export default {
  name: "Ofertes2",
  data: () => ({
    show: false,
    toggle_exclusive: undefined,
    productFilter: "all",
  }),
  computed: {
    ofertes() {
      return this.$store.getters.loadedOfertes;
    },
  },
};
</script>

<style scoped>
.filtres {
  position: absolute;
  right: 16px;
  top: 32px;
}
</style>
