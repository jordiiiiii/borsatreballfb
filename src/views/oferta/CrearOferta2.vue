<template>
  <v-container pa-6>
    <v-row>
      <v-col cols="12" sm="6" class="offset-sm-3">
        <h2 class="text-uppercase headline">Crea a nova Oferta</h2>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <form @submit.prevent="onCreateOferta">
          <v-row>
            <v-col cols="12" sm="6" class="offset-sm-3">
              <v-text-field
                name="empresa"
                label="Empresa"
                id="empresa"
                v-model="empresa"
                required
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" sm="6" class="offset-sm-3">
              <v-text-field
                name="titol"
                label="Títol"
                id="titol"
                v-model="titol"
                required
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" sm="6" class="offset-sm-3">
              <v-textarea
                name="descripcio"
                label="Descripció"
                id="descripcio"
                v-model="descripcio"
                auto-grow
                required
                rows="1"
              ></v-textarea>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" sm="6" class="offset-sm-3">
              <v-text-field
                name="localitzacio"
                label="Localització"
                id="localitzacio"
                v-model="localitzacio"
                required
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" sm="6" class="offset-sm-3">
              <v-text-field
                name="categoria"
                label="Categoria"
                id="categoria"
                v-model="categoria"
                required
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" sm="6" class="offset-sm-3">
              <v-text-field
                name="email"
                label="Email"
                id="email"
                v-model="email"
                required
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" sm="6" class="offset-sm-3">
              <v-btn class="primary" :disabled="!formIsValid" type="submit">
                Creació Oferta
              </v-btn>
            </v-col>
          </v-row>
        </form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "CrearOferta2",
  data() {
    return {
      empresa: "",
      titol: "",
      descripcio: "",
      localitzacio: "",
      data: "",
      categoria: "",
      email: "",
      imageUrl: "",
    };
  },
  computed: {
    formIsValid() {
      return (
        this.empresa !== "" &&
        this.titol !== "" &&
        this.descripcio !== "" &&
        this.localitzacio !== "" &&
        this.categoria !== "" &&
        this.email !== ""
      );
    },
  },
  methods: {
    onCreateOferta() {
      if (!this.formIsValid) {
        return;
      }
      const ofertaData = {
        empresa: this.empresa,
        titol: this.titol,
        descripcio: this.descripcio,
        localitzacio: this.localitzacio,
        data: new Date(),
        imageUrl: this.imageUrl,
      };
      console.log(ofertaData);
      // this.$store.dispatch("createOferta", ofertaData);
      // this.$router.push("/ofertes");
    },
  },
};
</script>
