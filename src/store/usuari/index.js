import firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";

export default {
  state: {
    user: {
      id: "OMQVCXDfinPklRSQi7eke9ybc7g2",
      registeredOfertes: ["-MW6Ee5zH35AXaxpJcIj"],
    },
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload;
    },
  },
  actions: {
    signUserUp({ commit }, payload) {
      commit("setLoading", true);
      commit("clearError");
      firebase
        .auth()
        .createUserWithEmailAndPassword(payload.email, payload.password)
        .then((user) => {
          commit("setLoading", false);
          const newUser = {
            id: user.uid,
            registeredOfertes: [],
            // fbKeys: {},
          };
          commit("setUser", newUser);
        })
        .catch((error) => {
          commit("setLoading", false);
          commit("setError", error);
          console.log(error);
        });
    },
    signUserIn({ commit }, payload) {
      commit("setLoading", true);
      commit("clearError");
      firebase
        .auth()
        .signInWithEmailAndPassword(payload.email, payload.password)
        .then((user) => {
          commit("setLoading", false);
          const newUser = {
            id: user.uid,
            registeredMeetups: [],
            // fbKeys: {},
          };
          commit("setUser", newUser);
        })
        .catch((error) => {
          commit("setLoading", false);
          commit("setError", error);
          console.log(error);
        });
    },
  },
  getters: {
    user(state) {
      return state.user;
    },
  },
};
