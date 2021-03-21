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
        data: "2019-03-11",
        categoria: "DAW",
        email: "empresa1@mail.com",
        imageUrl: "https://picsum.photos/id/366/400/300",
      },
      {
        id: "-MW6Ee5zH35AXaxpJcIj",
        estat: "publicat",
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
        estat: "publicat",
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
        estat: "publicat",
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
    updateMeetup(state, payload) {
      const oferta = state.loadedOfertes.find((oferta) => {
        return oferta.id === payload.id;
      });
      if (payload.titol) {
        oferta.titol = payload.titol;
      }
      if (payload.descripcio) {
        oferta.descripcio = payload.descripcio;
      }
      if (payload.data) {
        oferta.data = payload.data;
      }
    },
  },
  actions: {
    createOferta({ commit }, payload) {
      const oferta = {
        estat: payload.estat,
        empresa: payload.empresa,
        titol: payload.titol,
        descripcio: payload.descripcio,
        location: payload.location,
        categoria: payload.categoria,
        email: payload.email,
        data: payload.data,
        imageUrl: payload.imageUrl,
        // creatorId: getters.user.id,
      };
      commit("createOferta", oferta);
      // let imageUrl;
      // let key;
      // firebase
      //   .database()
      //   .ref("ofertes")
      //   .push(oferta)
      //   .then((data) => {
      //     key = data.key;
      //     return key;
      //   })
      //   .then((key) => {
      //     console.log(key);
      //     const filename = payload.image.name;
      //     const ext = filename.slice(filename.lastIndexOf("."));
      //     return firebase
      //       .storage()
      //       .ref("ofertes/" + key + ext)
      //       .put(payload.image);
      //   })
      //   .then((fileData) => {
      //     return fileData.ref.getDownloadURL().then((imageURL) => {
      //       return firebase
      //         .database()
      //         .ref("ofertes")
      //         .child(key)
      //         .update({ imageUrl: imageURL });
      //     });
      //   })
      //   .then(() => {
      //     commit("createOferta", {
      //       ...oferta,
      //       imageUrl: imageUrl,
      //       id: key,
      //     });
      //   })
      //   .catch((error) => {
      //     console.log(error);
      //   });
    },
  },
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
