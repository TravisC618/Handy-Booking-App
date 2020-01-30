import {combineReducers} from 'redux';
import carouselReducer from './carouselReducer';

const reduers = combineReducers({
    carousel: carouselReducer
});

export default reduers;