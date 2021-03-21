import Vue from "vue";
import Vuex from "vuex";

import meetup from "./oferta";
import user from "./usuari";
import shared from "./shared";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    meetup: meetup,
    user: user,
    shared: shared,
  },
});
