import { HANDLE_VIDEO_PLAY} from '../actions/carouselAction';

const initialState = {
    autoPlay: false,
};

const carouselReducer = (state = initialState, action) => {
    switch (action.type) {
        case HANDLE_VIDEO_PLAY:
            return {
                ...state,
                autoPlay: !state.autoPlay
            };
        default:
            return state;
    }
}

export default carouselReducer;