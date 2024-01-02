import AsyncStorage from "@react-native-async-storage/async-storage"
import { fetchAPI } from "./movieAPI";

const URL = "http://localhost:3000/";
const TOKEN_KEY = "myToken";
let isToken = false;

const login = async (userData) => {

  const ep = `${URL}api/login`;

  const data = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  };

  return fetchAPI(ep, data);
};

const Authorization = {
  
  loginUser: async (userData) => {
    try {
      const token = await login(userData);

      AsyncStorage.setItem(TOKEN_KEY, token.token);

      isToken = true;

    } catch (error) {
      console.error("Error saving token:", error);
    }
  },

  isToken: () => {
    return isToken;
  },
};

export default Authorization;