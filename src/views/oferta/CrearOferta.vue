<template>
  <v-container pa-6 class="crearOferta">
    <v-row>
      <v-col cols="12" sm="6" class="offset-sm-3">
        <h2 class="text-uppercase headline">Crear nova Oferta</h2>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <!--        <v-form ref="form" v-model="valid" lazy-validation>-->
        <!--          &lt;!&ndash;empresa&ndash;&gt;-->
        <!--          <v-row>-->
        <!--            <v-col cols="12" sm="6" class="offset-sm-3">-->
        <!--              <v-text-field-->
        <!--                v-model="empresa"-->
        <!--                :rules="[rules.required, rules.min, rules.max]"-->
        <!--                label="Empresa"-->
        <!--                hint="At least 3 characters"-->
        <!--                required-->
        <!--              >-->
        <!--              </v-text-field>-->
        <!--            </v-col>-->
        <!--          </v-row>-->
        <!--          &lt;!&ndash;email field&ndash;&gt;-->
        <!--          <v-row>-->
        <!--            <v-col cols="12" sm="6" class="offset-sm-3">-->
        <!--              <v-text-field-->
        <!--                v-model="email"-->
        <!--                :rules="emailRules"-->
        <!--                label="Email"-->
        <!--                required-->
        <!--              ></v-text-field>-->
        <!--            </v-col>-->
        <!--          </v-row>-->
        <!--          &lt;!&ndash;create btn&ndash;&gt;-->
        <!--          <v-row>-->
        <!--            <v-col cols="12" sm="6" class="offset-sm-3">-->
        <!--              <v-btn-->
        <!--                :disabled="!valid"-->
        <!--                color="success"-->
        <!--                elevation="1"-->
        <!--                outlined-->
        <!--                block-->
        <!--                @click="onCreateOferta"-->
        <!--                >Create account-->
        <!--              </v-btn>-->
        <!--            </v-col>-->
        <!--          </v-row>-->
        <!--          &lt;!&ndash;reset btn&ndash;&gt;-->
        <!--          <v-row>-->
        <!--            <v-col cols="12" sm="6" class="offset-sm-3">-->
        <!--              <v-btn color="error" elevation="1" outlined block @click="reset">-->
        <!--                Reset-->
        <!--              </v-btn>-->
        <!--            </v-col>-->
        <!--            &lt;!&ndash;reset btn validation&ndash;&gt;-->
        <!--            <v-col cols="12" sm="6" class="offset-sm-3">-->
        <!--              <v-btn-->
        <!--                color="warning"-->
        <!--                elevation="1"-->
        <!--                outlined-->
        <!--                block-->
        <!--                @click="resetValidation"-->
        <!--              >-->
        <!--                Stop Validation-->
        <!--              </v-btn>-->
        <!--            </v-col>-->
        <!--          </v-row>-->
        <!--        </v-form>-->

        <v-form ref="form">
          <v-row>
            <v-col cols="12" sm="6" class="offset-sm-3">
              <v-text-field
                ref="empresa"
                v-model="empresa"
                :rules="[
                  () => !!empresa || 'Aquest camp és obligatori',
                  () =>
                    (!!empresa && empresa.length <= 25) ||
                    'El nom ha de tenir menys de 25 caràcters',
                ]"
                :error-messages="errorMessages"
                label="Empresa"
                name="empresa"
                id="empresa"
                placeholder="ORACLE"
                required
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" sm="6" class="offset-sm-3">
              <v-text-field
                ref="titol"
                v-model="titol"
                :rules="[
                  () => !!titol || 'Aquest camp és obligatori',
                  () =>
                    (!!titol && titol.length <= 25) ||
                    'El títol ha de tenir menys de 25 caràcters',
                ]"
                :error-messages="errorMessages"
                name="titol"
                label="Títol"
                id="titol"
                placeholder="Desenvolupador WEB"
                required
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" sm="6" class="offset-sm-3">
              <v-textarea
                ref="descripcio"
                v-model="descripcio"
                :rules="[
                  () => !!descripcio || 'Aquest camp és obligatori',
                  () =>
                    (!!descripcio && descripcio.length >= 25) ||
                    'La descripció ha de tenir un mínim de 25 caràcters',
                  () =>
                    (!!descripcio && descripcio.length <= 200) ||
                    'La descripció ha de tenir menys de 200 caràcters',
                ]"
                :error-messages="errorMessages"
                name="descripcio"
                label="Descripció"
                id="descripcio"
                placeholder="Fes una breu descripció de l'oferta de treball"
                counter="200"
                required
                auto-grow
                rows="1"
              ></v-textarea>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" sm="6" class="offset-sm-3">
              <v-text-field
                ref="localitzacio"
                v-model="localitzacio"
                :rules="[
                  () => !!localitzacio || 'Aquest camp és obligatori',
                  () =>
                    (!!localitzacio && localitzacio.length <= 25) ||
                    'El títol ha de tenir menys de 25 caràcters',
                ]"
                :error-messages="errorMessages"
                label="Localització"
                name="localitzacio"
                id="localitzacio"
                placeholder="Barcelona"
                required
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" sm="6" class="offset-sm-3">
              <v-autocomplete
                ref="categoria"
                v-model="categoria"
                :rules="[() => !!categoria || 'Aquest camp és obligatori']"
                :items="categories"
                label="Categoria"
                placeholder="Selecciona..."
                required
              ></v-autocomplete>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" sm="6" class="offset-sm-3">
              <v-text-field
                ref="email"
                v-model="email"
                :rules="[() => !!email || 'Aquest camp és obligatori']"
                :error-messages="errorMessages"
                label="Email"
                name="email"
                id="email"
                placeholder="emailEmpresa@email.com"
                required
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" sm="6" class="offset-sm-3">
              <v-row>
                <!--reset btn validation-->
                <v-btn text color="warning" @click="resetValidation">
                  Cancel
                </v-btn>
                <v-spacer></v-spacer>
                <v-slide-x-reverse-transition>
                  <v-tooltip v-if="formHasErrors" left>
                    <template v-slot:activator="{ on, attrs }">
                      <!--reset btn-->
                      <v-btn
                        icon
                        class="my-0"
                        v-bind="attrs"
                        @click="resetForm"
                        v-on="on"
                      >
                        <v-icon>mdi-refresh</v-icon>
                      </v-btn>
                    </template>
                    <span>Refresh form</span>
                  </v-tooltip>
                </v-slide-x-reverse-transition>
                <!--submit btn-->
                <v-btn color="primary" text @click="onCreateOferta">
                  Crear
                </v-btn>
              </v-row>
            </v-col>
          </v-row>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "CrearOferta",
  data() {
    return {
      categories: ["ASIX", "DAM", "DAW", "SMX"],
      empresa: "",
      titol: "",
      descripcio: "",
      localitzacio: "",
      // data: "",
      categoria: "",
      email: "",
      // imageUrl: "",
      imagesUrl: [
        "https://cdn.vuetifyjs.com/images/cards/road.jpg",
        "https://cdn.pixabay.com/photo/2020/07/12/07/47/bee-5396362_1280.jpg",
        "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg",
        "https://cdn.pixabay.com/photo/2020/06/24/19/12/cabbage-5337431_1280.jpg",
      ],
      /////////////////////Antic formulari
      // value: "",
      // valid: true,
      // rules: {
      //   required: (value) => !!value || "Value Required.",
      //   min: (v) => (v && v.length >= 3) || "Min 3 characters",
      //   max: (v) => (v && v.length <= 10) || "Must be less than 10 characters",
      // },
      // emailRules: [
      //   (v) => !!v || "Email is required",
      //   (v) => /.+@.+\..+/.test(v) || "Email must be valid",
      // ],
      errorMessages: "",
      formHasErrors: false,
    };
  },
  computed: {
    form() {
      return {
        empresa: this.empresa,
        titol: this.titol,
        descripcio: this.descripcio,
        localitzacio: this.localitzacio,
        categoria: this.categoria,
        email: this.email,
      };
    },
  },
  watch: {
    name() {
      this.errorMessages = "";
    },
  },
  methods: {
    resetForm() {
      this.errorMessages = [];
      this.formHasErrors = false;

      Object.keys(this.form).forEach((f) => {
        this.$refs[f].reset();
      });
    },
    onCreateOferta() {
      this.formHasErrors = false;

      Object.keys(this.form).forEach((f) => {
        if (!this.form[f]) this.formHasErrors = true;

        this.$refs[f].validate(true);
      });

      if (!this.formHasErrors) {
        this.form["estat"] = "noaprovada";
        let avui = new Date();
        this.form["data"] =
          avui.getFullYear() +
          "-" +
          (avui.getMonth() + 1) +
          "-" +
          avui.getDate();

        // this.form["data"] = new Date();

        (this.form["imageUrl"] =
          this.categoria === "ASIX"
            ? this.imagesUrl[0]
            : this.categoria === "DAM"
            ? this.imagesUrl[1]
            : this.categoria === "DAW"
            ? this.imagesUrl[2]
            : this.imagesUrl[3]),
          console.log(this.form);
        this.$store.dispatch("createOferta", this.form);
        this.$router.replace("/ofertes");
      }
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    },
  },
  // methods: {
  //   onCreateOferta() {
  //     if (this.$refs.form.validate()) {
  //       const ofertaData = {
  //         empresa: this.empresa,
  //         titol: this.titol,
  //         descripcio: this.descripcio,
  //         localitzacio: this.localitzacio,
  //         data: new Date(),
  //         categoria: this.categoria,
  //         email: this.email,
  //         imageUrl:
  //           this.categoria === "ASIX"
  //             ? this.imagesUrl[0]
  //             : this.categoria === "DAM"
  //             ? this.imagesUrl[1]
  //             : this.categoria === "DAW"
  //             ? this.imagesUrl[2]
  //             : this.imagesUrl[3],
  //       };
  //       console.log(ofertaData);
  //       // this.$refs.form.reset();
  //       // this.$router.replace("/usuari").catch(() => {});
  //     }
  //   },
  //   reset() {
  //     this.$refs.form.reset();
  //   },
  //   resetValidation() {
  //     this.$refs.form.resetValidation();
  //   },
  // },
};
</script>

<style scoped></style>
