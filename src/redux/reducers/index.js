import { combineReducers } from "redux";
import loginReducer from "./loginReducer";
import registerReducer from "./registerReducer";
import taskReducer from "./taskReducer";
import accountReducer from "./accountReducer";

const reduers = combineReducers({
  login: loginReducer,
  register: registerReducer,
  task: taskReducer,
  account: accountReducer
});

export default reduers;
