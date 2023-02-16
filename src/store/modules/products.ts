import { IProduct } from "@/types";
import { IRootState } from "@/store";
import { ActionContext } from "vuex";
import { ProductsApi } from "@/api/products.api";

export interface IProductsState {
  all: IProduct[];
  current: IProduct | null;
  loading: boolean;
}
const initialState: IProductsState = {
  all: [],
  current: null,
  loading: false,
};

// initial state
const state: IProductsState = initialState;

// getters
const getters = {};

// actions
const actions = {
  async getProducts({ commit }: ActionContext<IProductsState, IRootState>) {
    commit("setLoading", true);
    const products = await ProductsApi.getAll();
    commit("setProducts", products);
    commit("setLoading", false);
  },
  async getProduct(
    { commit }: ActionContext<IProductsState, IRootState>,
    id: string
  ) {
    commit("setLoading", true);
    const product = await ProductsApi.getOne(id);
    commit("setProduct", product);
    commit("setLoading", false);
  },
};

// mutations
const mutations = {
  setProducts(state: IProductsState, payload: IProduct[]) {
    state.all = payload;
  },
  setProduct(state: IProductsState, payload: IProduct) {
    state.current = payload;
  },
  setLoading(state: IProductsState, payload: boolean) {
    state.loading = payload;
  },
};
export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
