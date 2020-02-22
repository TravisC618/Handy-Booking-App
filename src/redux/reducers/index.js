import { combineReducers } from "redux";
import carouselReducer from "./carouselReducer";
import bookingReducer from "./bookingReducer";
import taskReducer from "./taskReducer";

const reduers = combineReducers({
  carousel: carouselReducer,
  booking: bookingReducer,
  task: taskReducer
});

export default reduers;
