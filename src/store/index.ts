import { createLogger, createStore } from "vuex";
import products from "@/store/modules/products";
import favorites, { IFavoriteProductsState } from "@/store/modules/favorites";
import { IProductsState } from "@/store/modules/products";

export interface IRootState {
  products: IProductsState;
  favorites: IFavoriteProductsState;
}

export const store = createStore({
  modules: {
    products,
    favorites,
  },
  plugins: [createLogger()],
});
