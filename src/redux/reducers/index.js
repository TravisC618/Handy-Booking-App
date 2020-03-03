import { combineReducers } from "redux";
import carouselReducer from "./carouselReducer";
import bookingReducer from "./bookingReducer";
import loginReducer from "./loginReducer";

const reduers = combineReducers({
  carousel: carouselReducer,
  booking: bookingReducer,
  login: loginReducer
});

export default reduers;
