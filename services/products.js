import axios from "axios";
import { URL_BACK_END } from "../utils/constants";
export default class ProductService {
  async getHotProducts() {
    const res = await axios.get(`${URL_BACK_END}/api/products/hot`);
    return res.data.payload.products;
  }

  async getNewProducts() {
    const res = await axios.get(`${URL_BACK_END}/api/products/new`);
    return res.data.payload.products;
  }

  async getProductsByID(token_Value) {
    const res = await axios.get(`${URL_BACK_END}/api/users/following?token=${token_Value}`);
    return res.data.payload.products;
  }
}
