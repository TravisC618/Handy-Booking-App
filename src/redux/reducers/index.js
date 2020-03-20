import { combineReducers } from "redux";
import loginReducer from "./loginReducer";
import registerReducer from "./registerReducer";
import taskReducer from "./taskReducer";

const reduers = combineReducers({
  login: loginReducer,
  register: registerReducer,
  task: taskReducer
});

export default reduers;
