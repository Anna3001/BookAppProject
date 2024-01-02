import { fetchAPI } from "./movieAPI";

const URL = "http://localhost:3000/";

export const register = async (loginData) => {
  const ep = `${URL}api/register`;
  console.log(loginData);
  const data = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(loginData),
  };

  const token = fetchAPI(ep, data);
  return token;
};