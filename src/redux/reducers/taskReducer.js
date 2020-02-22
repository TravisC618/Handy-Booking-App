import { FETCH_SUCCESS } from "../actions/taskAction";

const initialState = {
  tasks: [],
  pagination: {}
};
const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SUCCESS:
      return {
        ...state,
        tasks: action.tasks,
        pagination: action.pagination
      };
    default:
      return state;
  }
};

export default taskReducer;
