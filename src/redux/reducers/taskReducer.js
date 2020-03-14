import {
  UPDATE_TOTAL,
  UPDATE_PRICE_RANGE,
  INCREMENT_PAGE,
  UPDATE_ITEM_STATE,
  ERROR_MSG,
  RESET_ITEM,
  UPDATE_DETAIL_STATE,
  UPDATE_LOADING_STATE
} from "../actions/taskAction";

const initialState = {
  total: 0,
  page: 1,
  pageSize: 10,
  priceRange: [5, 9999],
  hasMoreItem: false,
  errMsg: "",
  isToggleOn: true,
  isDetailOn: true,
  isLoading: false,
  taskDetails: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_TOTAL:
      return {
        ...state,
        total: action.total
      };
    case UPDATE_PRICE_RANGE:
      return {
        ...state,
        priceRange: action.priceRange
      };
    case INCREMENT_PAGE:
      return {
        ...state,
        page: state.page + 1
      };
    case UPDATE_ITEM_STATE:
      return {
        ...state,
        hasMoreItem: !state.hasMoreItem
      };
    case ERROR_MSG:
      return {
        ...state,
        errMsg: action.errMsg
      };
    case RESET_ITEM:
      return initialState;
    case UPDATE_DETAIL_STATE:
      return {
        ...state,
        taskDetails: action.taskDetails
      };
    case UPDATE_LOADING_STATE:
      return {
        ...state,
        isLoading: !state.isLoading
      };
    default:
      return state;
  }
};
