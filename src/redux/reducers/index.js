import { combineReducers } from "redux";
import loginReducer from "./loginReducer";
import taskReducer from "./taskReducer";

const reduers = combineReducers({
  login: loginReducer,
  task: taskReducer
});

export default reduers;
