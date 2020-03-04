import { createContext } from "react";

// React Hooks
export const UPDATE_TOTAL = "UPDATE_TOTAL";
export const INCREMENT_PAGE = "UPDATE_PAGE";
export const UPDATE_PRICE_RANGE = "UPDATE_PRICE_RANGE";
export const UPDATE_ITEM_STATE = "UPDATE_ITEM_STATE";
export const ERROR_MSG = "ERROR_MSG";
export const RESET_ITEM = "RESET_ITEM";
export const SHOW_Map_State = "SHOW_Map_State";

export const TaskContext = createContext();

export const initialState = {
  total: 0,
  page: 1,
  pageSize: 10,
  priceRange: [5, 9999],
  hasMoreItem: false,
  errMsg: "",
  isToggleOn: true,
  isDetailOn: true,
};

export const taskReducer = (state, action) => {
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
    default:
      return state;
  }
};
