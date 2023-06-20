import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const state = {
  animeList: [],
};

const mutations = {
  saveAnime(state, animeList) {
    state.animeList = animeList;
  },
  updateAnime(state, editedAnime) {
    console.log(state.animeList);
    let temp = {...editedAnime};
    const index = state.animeList.findIndex((anime) => anime.title == temp.title);
    if (index !== -1) {
      state.animeList.splice(index, 1, editedAnime);
    }
    console.log(state.animeList);
  },
};

const actions = {
  addAnime({ commit }, anime) {
    let myAnimeList = [...state.animeList, anime];
    commit('saveAnime', myAnimeList);
  },
  updateAnime({ commit }, editedAnime) {
    commit('updateAnime', editedAnime);
  },
};

const getters = {
  animeList: (state) => state.animeList,
};

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
});
