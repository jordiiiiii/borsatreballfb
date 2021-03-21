<template>
  <v-container class="expand">
    <v-row align="center" justify="center">hola1</v-row>
    <v-row align="center" justify="center">hola2</v-row>
    <v-row align="center" justify="center">hola3</v-row>
    <v-row align="center" justify="center">hola4</v-row>
    <v-row align="center" justify="center">hola5</v-row>
  </v-container>
</template>

<script>
export default {
  name: "Profile",
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
