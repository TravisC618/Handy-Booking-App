import {combineReducers} from 'redux';
import carouselReducer from './carouselReducer';
import bookingReducer from './bookingReducer';

const reduers = combineReducers({
    carousel: carouselReducer,
    booking: bookingReducer
});

export default reduers;