import querystring from "querystring";
import { get, post } from "./axios";

const API_TASK_URL = "/api/tasks";

/**
 * [Params]
 * - pagination: page, pageSize
 * - priceRange: minPrice, maxPrice
 * - search: keywords
 * - sort: field name
 */
export const reqGetAllTasks = (
  page = 1,
  pageSize = 10,
  minPrice = 5,
  maxPrice = 9999,
  sort = "",
  q = "" // search key
) => {
  const stringField = querystring.stringify({
    page,
    pageSize,
    minPrice,
    maxPrice,
    sort,
    q
  });
  const url = `${API_TASK_URL}?${stringField}`;

  return get(url);
};

export const reqGetTask = id => {
  const url = `${API_TASK_URL}/${id}`;

  return get(url);
};

export const reqPostTask = (taskDetails, userId) => {
  const url = `${API_TASK_URL}/users/${userId}`;

  return post(url, taskDetails);
};
