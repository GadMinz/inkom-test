import axios from "axios";
import { IProduct } from "@/types";

axios.defaults["baseURL"] = "https://fakestoreapi.com/";

export const ProductsApi = {
  async getAll() {
    try {
      const { data } = await axios.get<IProduct[]>("products");
      return data;
    } catch (e) {
      alert(e);
    }
  },
  async getOne(id: string) {
    try {
      const { data } = await axios.get<IProduct>("products/" + id);
      return data;
    } catch (e) {
      alert(e);
    }
  },
};
