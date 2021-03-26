import firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";
import DataFromNDays from "@/composables/dateTo-nDays";
// axios
import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";

Vue.use(VueAxios, axios);

export default {
  state: {
    dateTo3Months: DataFromNDays(90),
    loadedEmpreses: [
      {
        id: 1,
        usuari_id: 9,
        nom: "empresa1",
        tipus: "titol1",
        logo: "2019-03-11",
        correu: "empresa1@mail.com",
      },
    ],
    loadedImatges: {
      ASIX: "https://picsum.photos/id/11/500/500",
      DAM: "https://picsum.photos/id/201/500/300",
      DAW: "https://picsum.photos/id/366/400/300",
      SMX: "https://picsum.photos/id/855/500/300",
    },
    loadedOfertes: [
      {
        id: "-MW6Ee5777EAXaxpJcIj",
        estat: "publicada",
        empresa: "empresa1",
        titol: "titol1",
        descripcio:
          "I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape1.",
        localitzacio: "Barcelona",
        data: "2019-03-11",
        categoria: "DAW",
        email: "empresa1@mail.com",
        imageUrl: "https://picsum.photos/id/366/400/300",
      },
      {
        id: "-MW6Ee5zH35AXaxpJcIj",
        estat: "publicada",
        empresa: "empresa2",
        titol: "titol2",
        descripcio:
          "I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape2.",
        localitzacio: "Lleida",
        data: "2021-4-11",
        categoria: "DAM",
        email: "empresa2@mail.com",
        imageUrl: "https://picsum.photos/id/201/500/300",
      },
      {
        id: "-MW6Ee57999AXaxpJcIj",
        estat: "publicada",
        empresa: "empresa3",
        titol: "titol3",
        descripcio:
          "I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape3.",
        localitzacio: "Sant Cugat",
        data: "2021-3-16",
        categoria: "SMX",
        email: "empresa3@mail.com",
        imageUrl: "https://picsum.photos/id/855/500/300",
      },
      {
        id: "-MWrre5zH35AXaxpJcIj",
        estat: "publicada",
        empresa: "empresa4",
        titol: "titol4",
        descripcio:
          "I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape4.",
        localitzacio: "Lleida",
        data: "2020-4-11",
        categoria: "ASIX",
        email: "empresa4@mail.com",
        imageUrl: "https://picsum.photos/id/11/500/500",
      },
    ],
  },
  mutations: {
    setLoadedOfertes(state, payload) {
      state.loadedOfertes = payload;
    },
    createOferta(state, payload) {
      state.loadedOfertes.push(payload);
    },
  },
  actions: {
    loadOfertes({ commit, getters }) {
      const dataFilter = getters.dataFilter;
      const loadedImatges = getters.loadedImatges;
      commit("setLoading", true);
      console.log(dataFilter);
      Vue.axios
        .get(
          `http://labs.iam.cat/~a18jorgornei/projecte3/back/api.php/records/oferta?filter=data_publicacio,ge,${dataFilter}&join=empresa_id,empresa&join=categoria_id,categoria`
        )
        .then((response) => {
          console.log(response.data.records);
          const ofertes = [];
          const obj = response.data.records;
          for (let key in obj) {
            let img = obj[key].categoria_id.descripcio;
            ofertes.push({
              id: obj[key].id,
              estat: obj[key].estat,
              empresa: obj[key].empresa_id.nom,
              titol: obj[key].titol,
              descripcio: obj[key].descripcio,
              localitzacio: obj[key].ubicacio,
              data: obj[key].data_publicacio,
              categoria: obj[key].categoria_id.descripcio,
              email: obj[key].empresa_id.correu,
              imageUrl: loadedImatges[img],
              creatorId: obj[key].empresa_id,
            });
          }
          console.log(ofertes);
          commit("setLoadedOfertes", ofertes);
          commit("setLoading", false);
        })
        .catch((error) => {
          console.log(error);
          commit("setLoading", false);
        });
    },
    // loadOfertes({ commit, getters }) {
    //   const dataFilter = getters.dataFilter;
    //   commit("setLoading", true);
    //   firebase
    //     .database()
    //     .ref("ofertes")
    //     .orderByChild("data")
    //     .startAt(dataFilter)
    //     .once("value")
    //     .then((data) => {
    //       const ofertes = [];
    //       const obj = data.val();
    //       for (let key in obj) {
    //         ofertes.push({
    //           id: key,
    //           estat: obj[key].estat,
    //           empresa: obj[key].empresa,
    //           titol: obj[key].titol,
    //           descripcio: obj[key].descripcio,
    //           localitzacio: obj[key].localitzacio,
    //           data: obj[key].data,
    //           categoria: obj[key].categoria,
    //           email: obj[key].email,
    //           imageUrl: obj[key].imageUrl,
    //           creatorId: obj[key].creatorId,
    //         });
    //       }
    //       commit("setLoadedOfertes", ofertes);
    //       commit("setLoading", false);
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //       commit("setLoading", false);
    //     });
    // },
    createOferta({ commit, getters }, payload) {
      const oferta = {
        estat: payload.estat,
        empresa: payload.empresa,
        titol: payload.titol,
        descripcio: payload.descripcio,
        localitzacio: payload.localitzacio,
        categoria: payload.categoria,
        email: payload.email,
        data: payload.data,
        imageUrl: payload.imageUrl,
        creatorId: getters.user.id,
      };
      firebase
        .database()
        .ref("ofertes")
        .push(oferta)
        .then((data) => {
          const key = data.key;
          commit("createOferta", {
            ...oferta,
            id: key,
          });
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  getters: {
    loadedOfertes(state) {
      return state.loadedOfertes
        .filter((db) => {
          return db.estat == 1;
        })
        .sort((ofertaA, ofertaB) => {
          return ofertaA.data < ofertaB.data ? 1 : -1;
        });
    },
    featuredOfertes(state, getters) {
      return getters.loadedOfertes.slice(0, 5);
    },
    loadedOferta(state) {
      return (ofertaId) => {
        return state.loadedOfertes.find((oferta) => {
          return oferta.id == ofertaId;
        });
      };
    },
    loadedImatges(state) {
      return state.loadedImatges;
    },
    dataFilter(state) {
      return state.dateTo3Months;
    },
  },
};
