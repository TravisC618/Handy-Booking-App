import { get, post } from "./axios";

const API_CUSTOMERS_URL = "/api/customers";
const TASKS_URL = "/tasks";
const TRADIES_URL = "/tradies";

export const reqGetCustomer = id => {
  const url = `${API_CUSTOMERS_URL}/${id}`;

  return get(url);
};

// /api/customers/5e746b6329401d002284b30e/tasks/5e771a4157eb3c0022d5ee02/tradies/5e74635629401d002284b30c
export const reqAssignTask = (customerId, taskId, tradieId) => {
  const url = `${API_CUSTOMERS_URL}/${customerId}${TASKS_URL}/${taskId}${TRADIES_URL}/${tradieId}`;

  return post(url);
};
