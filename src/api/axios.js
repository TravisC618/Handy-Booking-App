import axios from "axios";

axios.defaults.baseURL = "https://byedust-api-server.herokuapp.com";

export const get = (url, config = {}) => {
  return axios.get(url, config);
};

export const post = (url, data, config = {}) => {
  return axios.post(url, data, config);
};
