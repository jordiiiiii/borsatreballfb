export default {
  state: {
    loadedOfertes: [
      {
        id: "-MW6Ee5777EAXaxpJcIj",
        estat: "publicat",
        empresa: "empresa1",
        titol: "titol1",
        descripcio:
          "I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape1.",
        localitzacio: "Barcelona",
        data: "2019-03-11T18:25:00.000Z",
        categoria: "DAW",
        email: "empresa1@mail.com",
        imageUrl: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg",
      },
      {
        id: "-MW6Ee5zH35AXaxpJcIj",
        estat: "publicat",
        empresa: "empresa2",
        titol: "titol2",
        descripcio:
          "I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape2.",
        localitzacio: "Lleida",
        data: "2021-04-11T18:25:00.000Z",
        categoria: "DAM",
        email: "empresa2@mail.com",
        imageUrl:
          "https://cdn.pixabay.com/photo/2020/07/12/07/47/bee-5396362_1280.jpg",
      },
      {
        id: "-MW6Ee57999AXaxpJcIj",
        estat: "publicat",
        empresa: "empresa3",
        titol: "titol3",
        descripcio:
          "I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape3.",
        localitzacio: "Sant Cugat",
        data: "2021-03-16T18:25:00.000Z",
        categoria: "SMX",
        email: "empresa3@mail.com",
        imageUrl:
          "https://cdn.pixabay.com/photo/2020/06/24/19/12/cabbage-5337431_1280.jpg",
      },
      {
        id: "-MWrre5zH35AXaxpJcIj",
        estat: "publicat",
        empresa: "empresa4",
        titol: "titol4",
        descripcio:
          "I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape4.",
        localitzacio: "Lleida",
        data: "2020-04-11T18:25:00.000Z",
        categoria: "ASIX",
        email: "empresa4@mail.com",
        imageUrl: "https://cdn.vuetifyjs.com/images/cards/road.jpg",
      },
    ],
  },
  mutations: {},
  actions: {},
  getters: {
    loadedOfertes(state) {
      return state.loadedOfertes.sort((ofertaA, ofertaB) => {
        return ofertaA.data < ofertaB.data ? 1 : -1;
      });
    },
    loadedOferta(state) {
      return (ofertaId) => {
        return state.loadedOfertes.find((oferta) => {
          return oferta.id === ofertaId;
        });
      };
    },
    featuredOfertes(state, getters) {
      return getters.loadedOfertes.slice(0, 5);
    },
  },
};
