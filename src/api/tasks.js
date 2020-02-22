import querystring from "querystring";
import axiosHandler from "./axiosHandler";

/**
 * [Params]
 * - pagination: page, pageSize
 * - priceRange: minPrice, maxPrice
 * - search: keywords
 * - sort: field name
 */
export const reqGetAllTasks = (page = 1, pageSize = 10) => {
  const stringField = querystring.stringify({ page, pageSize });

  return axiosHandler(`/api/tasks?${stringField}`, "GET");
};
