<template>
  <v-container class="expand">
    <v-row align="center" justify="center">hola1</v-row>
    <v-row align="center" justify="center">hola2</v-row>
    <v-row align="center" justify="center">hola3</v-row>
    <v-row align="center" justify="center">hola4</v-row>
    <v-row align="center" justify="center">hola5</v-row>
    <v-row fluid>
      <v-col
        cols="12"
        sm="6"
        md="4"
        v-for="empresa in empreses"
        :key="empresa.id"
      >
        <v-card max-width="344">
          <v-card-title v-text="empresa.nom"></v-card-title>

          <v-card-subtitle>
            {{ empresa.tipus }} - {{ empresa.correu }}
          </v-card-subtitle>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Profile",
  computed: {
    empreses() {
      return this.$store.getters.loadedEmpreses;
    },
  },
};
</script>

<style scoped>
.expand {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: calc(100vh - 128px);
}
</style>
