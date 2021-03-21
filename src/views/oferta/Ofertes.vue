<template>
  <v-container>
    <v-row v-for="oferta in ofertes" :key="oferta.id">
      <v-col>
        <v-card class="mx-auto" max-width="344">
          <v-img :src="oferta.imageUrl" height="150px"></v-img>

          <v-card-title v-text="oferta.titol"></v-card-title>

          <v-card-subtitle> {{ oferta.data }} </v-card-subtitle>

          <v-card-actions>
            <v-btn color="orange lighten-2" text :to="'/ofertes/' + oferta.id">
              Explore
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
  </v-container>
</template>

<script>
export default {
  name: "Ofertes",
  data: () => ({
    show: false,
  }),
  computed: {
    ofertes() {
      return this.$store.getters.loadedOfertes;
    },
  },
};
</script>

<style scoped></style>
