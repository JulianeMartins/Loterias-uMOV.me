import { createStore } from "vuex";
import {
  SENA,
  QUINA,
  CHANGE_DEFAULT_CONFIG,
  CLEAR_SELECTED_DOZENS,
  CHANGE_SELECTED_DOZENS,
} from "../consts";

export default createStore({
  state: {
    defaultConfig: SENA,
    selectedDozens: [],
  },
  mutations: {
    CHANGE_DEFAULT_CONFIG(state, config) {
      state.defaultConfig = { ...config };
    },
    CHANGE_SELECTED_DOZENS(state, dozens) {
      state.selectedDozens = [...dozens];
    },
    CLEAR_SELECTED_DOZENS(state) {
      state.selectedDozens = [];
    },
  },
  actions: {
    changeCardToQuina({ commit }) {
      commit(CHANGE_DEFAULT_CONFIG, QUINA);
      commit(CLEAR_SELECTED_DOZENS);
    },
    changeCardToSena({ commit }) {
      commit(CHANGE_DEFAULT_CONFIG, SENA);
      commit(CLEAR_SELECTED_DOZENS);
    },
    changeSelectedDozens({ commit }, dozens) {
      commit(CHANGE_SELECTED_DOZENS, dozens);
    },
  },
  getters: {
    gamePrice: (state) => {
      const amountOfSelectedDozens = state.selectedDozens.length;
      return state.defaultConfig.prices
        .find((game) => game.amount === amountOfSelectedDozens)
        .price.toLocaleString("pt-br", { style: "currency", currency: "BRL" });
    },
    ascendingSelectedDozens: (state) => {
      return state.selectedDozens.sort((a, b) => a - b).toString();
    },
    selectedDozensLength: (state) => {
      return state.selectedDozens.length;
    },
  },
});
