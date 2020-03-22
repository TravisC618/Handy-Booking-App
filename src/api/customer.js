import { get, post } from "./axios";

const API_CUSTOMERS_URL = "/api/customers";

export const reqGetCustomer = id => {
  const url = `${API_CUSTOMERS_URL}/${id}`;

  return get(url);
};
