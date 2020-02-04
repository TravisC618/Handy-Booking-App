import { HANDLE_DATE_PICK, HANDLE_ROOM_NUM } from '../actions/bookingAction'; 

const initialState = {
    isCertain: true,
    bedroomNum: 0,
    bathroomNum: 0
}

const bookingReducer = (state = initialState, action) => {
    switch(action.type) {
        case HANDLE_DATE_PICK:
            return {
                ...state,
                isCertain: action.event.target.value === "certain" ? false : true
            }
        case HANDLE_ROOM_NUM:
            return {
                ...state,
                [action.roomType]: action.num
            }
        default:
            return state;
    }
};

export default bookingReducer;