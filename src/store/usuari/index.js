import firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";

// axios
import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";

Vue.use(VueAxios, axios);

export default {
  state: {
    user: null,
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload;
    },
  },
  actions: {
    signUserIn({ commit }, payload) {
      commit("setLoading", true);
      commit("clearError");
      Vue.axios
        .get(
          `http://labs.iam.cat/~a18jorgornei/projecte3/back/api.php/records/user?filter=roles,eq,["ROLE_USER"]&filter=email,eq,${payload.email}`
        )
        .then((response) => {
          let res = response.data.records;
          if (res.length === 0) {
            console.log("No hi ha cap usuari amb aquest mail");
          } else {
            firebase
              .auth()
              .signInWithEmailAndPassword(payload.email, payload.password)
              .then((user) => {
                commit("setLoading", false);
                const newUser = {
                  id: user.uid,
                  registeredOfertes: [],
                  fbKeys: {},
                };
                commit("setUser", newUser);
              })
              .catch((error) => {
                if (error.code === "auth/user-not-found") {
                  firebase
                    .auth()
                    .createUserWithEmailAndPassword(
                      payload.email,
                      payload.password
                    )
                    .then((user) => {
                      commit("setLoading", false);
                      const newUser = {
                        id: user.uid,
                        registeredOfertes: [],
                        fbKeys: {},
                      };
                      commit("setUser", newUser);
                    })
                    .catch((error) => {
                      commit("setLoading", false);
                      commit("setError", error);
                      console.log(error);
                    });
                } else {
                  commit("setLoading", false);
                  commit("setError", error);
                  console.log(error);
                }
              });
          }
          commit("setLoading", false);
        })
        .catch((error) => {
          console.log(error + "yoyo2");
          commit("setLoading", false);
        });
    },
    autoSignIn({ commit }, payload) {
      commit("setUser", { id: payload.uid, registeredOfertes: [], fbKeys: {} });
    },
    logout({ commit }) {
      firebase.auth().signOut();
      commit("setUser", null);
    },
  },
  getters: {
    user(state) {
      return state.user;
    },
  },
};
