import { reqGetAllTasks } from "../../api/tasks";

export const HANDLE_PRICE_RANGE = "HANDLE_PRICE_RANGE";
export const FETCH_SUCCESS = "FETCH_SUCCESS";

export const handlePriceRange = (minPrice, maxPrice) => ({
  type: HANDLE_PRICE_RANGE,
  minPrice,
  maxPrice
});

export const fetchSuccess = (tasks, pagination) => ({
  type: FETCH_SUCCESS,
  tasks,
  pagination
});

export const handleGetAllTasks = (page, pageSize) => async dispatch => {
  let response;
  try {
    response = await reqGetAllTasks(page, pageSize);
  } catch (error) {
    response = error.message;
  }

  const result = response.data;
  if (result.status === "success") {
    const tasks = result.data.tasks;
    const pagination = result.data.pagination;
    dispatch(fetchSuccess(tasks, pagination));
    return { tasks, pagination };
  } else {
    console.log("error mssage: ...");
  }
};
