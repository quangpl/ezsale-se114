import { AsyncStorage } from "react-native";
import { URL_BACK_END } from "../utils/constants";
import axios from "axios";

export default class UserService {
  async register({ name, email, password }) {
    const res = await axios.post(`${URL_BACK_END}/api/users/register`, {
      name,
      email,
      password
    });

    return res.data;
  }

  async login({ email, password }) {
    const res = await axios.post(`${URL_BACK_END}/api/users/login`, {
      email,
      password
    });

    if (!res.data.error) {
      await AsyncStorage.setItem("token", res.data.payload.token);
      console.log(res.data.payload);
      return res.data.payload;
    } else {
      return false;
    }
  }


  async logout() {
    await AsyncStorage.setItem("token", undefined);
  }

  async auth() {
    const token = await AsyncStorage.getItem("token");
    const res = await axios.get(`${URL_BACK_END}/api/users/auth?token=${token}`);
    return res.data;
  }
}
