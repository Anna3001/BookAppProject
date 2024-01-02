import Authorization from "../.shared/loginAPI";
import { register } from "../.shared/registerAPI";

export async function registerUser(userData) {
  register(userData);
}

export async function login(userData) {
  await Authorization.loginUser(userData)

  return Authorization.isToken();
}