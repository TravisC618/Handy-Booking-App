import {
  UPDATE_CURRENT_TASKS,
  UPDATE_TOTAL,
  UPDATE_PRICE_RANGE,
  INCREMENT_PAGE,
  UPDATE_ITEM_STATE,
  ERROR_MSG,
  UPDATE_SCROLLBAR_LOADING,
  RESET_ITEM,
  UPDATE_DETAIL_STATE,
  UPDATE_LOADING_STATE
} from "../actions/taskAction";

const initialState = {
  currTasks: [],
  taskDetails: {},
  total: 0,
  page: 1,
  pageSize: 10,
  priceRange: [5, 9999],
  hasMoreItem: false,
  errMsg: "",
  isDetailOn: true,
  isScrollBarLoading: false,
  isFetchingDetails: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_CURRENT_TASKS:
      return {
        ...state,
        // currTasks: [...state.currTasks, action.newTasks]，
        currTasks: action.newTasks
      };
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
    case UPDATE_SCROLLBAR_LOADING:
      return {
        ...state,
        isScrollBarLoading: !state.isScrollBarLoading
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
        isFetchingDetails: !state.isFetchingDetails
      };
    default:
      return state;
  }
};
