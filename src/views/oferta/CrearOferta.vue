<template>
  <div class="crearOferta">
    <h1 class="text-h6 text-sm-h5 text-md-h4 text-lg-h3 text-xl-h2">empresa</h1>
    <v-form ref="form" v-model="valid" lazy-validation>
      <v-container fluid>
        <!--firstname field-->
        <v-row justify="center">
          <v-col cols="12" sm="8" md="7" lg="6" xl="4">
            <v-text-field
              v-model="userData.firstname"
              :rules="[rules.required, rules.min, rules.max]"
              label="Firstname"
              hint="At least 3 characters"
              required
            >
            </v-text-field>
          </v-col>
        </v-row>
        <!--lastname field-->
        <v-row justify="center">
          <v-col cols="12" sm="8" md="7" lg="6" xl="4">
            <v-text-field v-model="userData.lastname" label="Lastname">
            </v-text-field>
          </v-col>
        </v-row>
        <!--username field-->
        <v-row justify="center">
          <v-col cols="12" sm="8" md="7" lg="6" xl="4">
            <v-text-field
              v-model="userData.username"
              :rules="[rules.required, rules.min, rules.max]"
              label="Username"
              hint="At least 3 characters"
              required
            >
            </v-text-field>
          </v-col>
        </v-row>
        <!--email field-->
        <v-row justify="center">
          <v-col cols="12" sm="8" md="7" lg="6" xl="4">
            <v-text-field
              v-model="userData.email"
              :rules="emailRules"
              label="Email"
              required
            ></v-text-field>
          </v-col>
        </v-row>
        <!--password field-->
        <v-row justify="center">
          <v-col cols="12" sm="8" md="7" lg="6" xl="4">
            <v-text-field
              v-model="userData.password"
              :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
              :rules="[passRules.required, passRules.min]"
              :type="showPassword ? 'text' : 'password'"
              label="Password"
              hint="At least 6 characters"
              counter
              @click:append="showPassword = !showPassword"
            ></v-text-field>
          </v-col>
        </v-row>
        <!--create btn-->
        <v-row justify="center">
          <v-col cols="12" sm="8" md="7" lg="6" xl="4">
            <v-btn
              :disabled="!valid"
              color="success"
              elevation="1"
              outlined
              block
              @click="addOferta"
              >Create account
            </v-btn>
          </v-col>
        </v-row>
        <!--reset btn-->
        <v-row justify="center">
          <v-col cols="12" sm="3" md="3" lg="3" xl="2">
            <v-btn color="error" elevation="1" outlined block @click="reset">
              Reset
            </v-btn>
          </v-col>
          <!--reset btn validation-->
          <v-col cols="12" sm="5" md="4" lg="3" xl="2">
            <v-btn
              color="warning"
              elevation="1"
              outlined
              block
              @click="resetValidation"
            >
              Stop Validation
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-form>
  </div>
</template>

<script>
export default {
  name: "CrearOferta",
  data() {
    return {
      userData: {
        empresa: "",
        lastname: "",
        phone: "",
        email: "",
        password: "",
      },
      value: "",
      successMessage: "You Win",
      errorMessage: "",
      showPassword: false,
      valid: true,
      loading: false,
      dialog: false,
      rules: {
        required: (value) => !!value || "Value Required.",
        min: (v) => (v && v.length >= 3) || "Min 3 characters",
        max: (v) => (v && v.length <= 10) || "Must be less than 10 characters",
        phone: (v) =>
          /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(v) ||
          "Phone must be valid",
      },
      emailRules: [
        (v) => !!v || "Email is required",
        (v) => /.+@.+\..+/.test(v) || "Email must be valid",
      ],
      passRules: {
        required: (value) => !!value || "Required.",
        min: (v) => (v && v.length >= 6) || "Min 6 characters",
      },
    };
  },
  methods: {
    addOferta() {
      if (this.$refs.form.validate()) {
        this.loading = true;
        const candidat = {
          email: this.email,
          pass: this.password,
          nom: this.password,
          cognoms: this.password,
          telefon: this.password,
          ofertes: [],
          usuari: {},
        };
        // moment asyncron
        console.log(candidat);
        this.loading = false;
        this.dialog = false;
        this.$refs.form.reset();
        this.$router.replace("/usuari").catch(() => {});
      }
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    },
  },
};
</script>

<style scoped></style>
