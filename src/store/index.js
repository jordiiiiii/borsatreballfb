import Vue from "vue";
import Vuex from "vuex";

import oferta from "./oferta";
import user from "./usuari";
import shared from "./shared";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    oferta: oferta,
    user: user,
    shared: shared,
  },
});
