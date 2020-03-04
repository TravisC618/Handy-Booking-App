import { HANDLE_VISIBLE } from "../actions/loginAction";

const initialState = {
  visible: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case HANDLE_VISIBLE:
      return {
        ...state,
        visible: action.isVisible
      };
    default:
      return state;
  }
};
