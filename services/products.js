import axios from "axios";
import { URL_BACK_END } from "../utils/constants";
export default class ProductService {
  async getHotProducts() {
    const res = await axios.get(`${URL_BACK_END}/api/products/hot`);
    return res.data.payload.products;
  }

  async getNewProducts({ page, perPage }) {
    const res = await axios.get(
      `${URL_BACK_END}/api/products/new?page=${page}&perPage=${perPage}`
    );
    return res.data.payload.products;
  }

  async getProductById(id) {
    const res = await axios.get(`${URL_BACK_END}/api/products/${id}`);
    return res.data.payload.product;
  }

  async getFollowingByToken(token) {
    const res = await axios.get(
      `${URL_BACK_END}/api/users/following?token${token}`
    );
    return res.data.payload.products;
  }

  async followProduct({ token, productId }) {
    const res = await axios.post(`${URL_BACK_END}/api/products/follow`, {
      token,
      productId
    });
    return true;
  }
}
