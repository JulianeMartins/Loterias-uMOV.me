import { createStore } from "vuex";
import { SENA, QUINA } from "../consts";

export default createStore({
  state: {
    defaultConfig: SENA,
  },
  mutations: {
    CHANGE_DEFAULT_CONFIG(state, config) {
      state.defaultConfig = { ...config };
    },
  },
  actions: {
    changeCardToQuina({ commit }) {
      commit("CHANGE_DEFAULT_CONFIG", QUINA);
    },
    changeCardToSena({ commit }) {
      commit("CHANGE_DEFAULT_CONFIG", SENA);
    },
  },
  modules: {},
});
