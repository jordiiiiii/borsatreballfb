<template>
  <v-container>
    <v-card class="mt-16 mx-auto" max-width="400">
      <v-sheet
        class="v-sheet--offset mx-auto"
        color="cyan"
        elevation="12"
        max-width="calc(100% - 32px)"
      >
        <v-sparkline
          :labels="labels"
          :value="categories"
          color="white"
          line-width="2"
          padding="16"
        ></v-sparkline>
      </v-sheet>

      <v-card-text class="pt-0">
        <div class="title font-weight-light mb-2">Registres d’ofertes</div>
        <div class="subheading font-weight-light grey--text">
          Nombre de registres per categories
        </div>
        <v-divider class="my-2"></v-divider>
        <v-icon class="mr-2" small> mdi-clock </v-icon>
        <span class="caption grey--text font-weight-light"
          >registres dels últims 3 mesos</span
        >
      </v-card-text>
    </v-card>

    <v-row class="mt-16">
      <v-col
        cols="12"
        sm="6"
        lg="3"
        v-for="(categoria, index) in categoriesGraph"
        :key="index"
      >
        <v-card class="mt-2 mb-3 mx-auto" max-width="400">
          <v-btn :color="categoria.color" dark absolute top left x-large fab>
            {{ categoria.cat }}
          </v-btn>
          <v-card-text>
            <div class="subheading font-weight-light grey--text aliDret">
              Ofertes
            </div>
            <div class="title black--text font-weight-light mb-2 aliDret">
              {{ categories[index] }}
            </div>
            <v-divider class="my-2"></v-divider>
            <v-icon class="mr-2" small> mdi-clock </v-icon>
            <span class="caption grey--text font-weight-light">
              registres dels últims 3 mesos
            </span>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Graphics",
  data: () => ({
    asix: 200,
    dam: 675,
    daw: 260,
    smx: 440,
    labels: ["ASIX", "DAM", "DAW", "SMX"],
    value: [400, 675, 160, 640],
    categoriesGraph: [
      { color: "pink", cat: "ASIX" },
      { color: "primary", cat: "DAM" },
      { color: "success", cat: "DAW" },
      { color: "orange", cat: "SMX" },
    ],
  }),
  computed: {
    ofertes() {
      return this.$store.getters.loadedOfertes;
    },
    categoriaASIX() {
      let count = 0;
      this.ofertes.forEach((element) => {
        if (element.categoria == "ASIX") {
          count++;
        }
      });
      return count;
    },
    categoriaDAM() {
      let count = 0;
      this.ofertes.forEach((element) => {
        if (element.categoria == "DAM") {
          count++;
        }
      });
      return count;
    },
    categoriaDAW() {
      let count = 0;
      this.ofertes.forEach((element) => {
        if (element.categoria == "DAW") {
          count++;
        }
      });
      return count;
    },
    categoriaSMX() {
      let count = 0;
      this.ofertes.forEach((element) => {
        if (element.categoria == "SMX") {
          count++;
        }
      });
      return count;
    },
    categories() {
      let categories = [
        this.categoriaASIX,
        this.categoriaDAM,
        this.categoriaDAW,
        this.categoriaSMX,
      ];
      return categories;
    },
  },
};
</script>

<style scoped>
.v-sheet--offset {
  top: -24px;
  position: relative;
}
.aliDret {
  text-align: right;
}
</style>
