import { post } from "./axios";

const LOGIN_URL = "/api/auth";

export const login = (email, password) => {
  const data = {
    email,
    password
  };
  return post(LOGIN_URL, data);
};
