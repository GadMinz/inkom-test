import { TFavoriteProduct } from "@/types";
import { IRootState } from "@/store";
import { ActionContext } from "vuex";

export interface IFavoriteProductsState {
  all: TFavoriteProduct[];
}
const initialState: IFavoriteProductsState = {
  all: [],
};

// initial state
const state: IFavoriteProductsState = initialState;

// getters
const getters = {};

// actions
const actions = {
  toggleFavoriteProduct(
    { commit }: ActionContext<IFavoriteProductsState, IRootState>,
    item: TFavoriteProduct
  ) {
    const isExistInFavorites = state.all.some((p) => p.id === item.id);
    if (isExistInFavorites) {
      commit("removeFavorite", item);
    } else {
      commit("addFavorite", item);
    }
  },
};

// mutations
const mutations = {
  addFavorite(state: IFavoriteProductsState, payload: TFavoriteProduct) {
    state.all.push(payload);
  },
  removeFavorite(state: IFavoriteProductsState, payload: TFavoriteProduct) {
    state.all = state.all.filter((p) => p.id !== payload.id);
  },
};
export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
