import { createContext } from "react";

export const UPDATE_Map_State = "UPDATE_Card_State";
export const UPDATE_DETAIL_STATE = "UPDATE_DETAIL_STATE";
export const UPDATE_LOADING_STATE ="UPDATE_ISLOADING_STATE";
export const UPDATE_LOADDED_STATE ="UPDATE_LOADDED_STATE";

export const DetailContext = createContext();

export const initialState = {
  isToggleOn: false,
  isDetailOn: true,
  isLoading: null,
  taskDetails: {}
};

export const detailReducer = (state, action) => {
  switch (action.type) {
    case UPDATE_Map_State:
      return {
        ...state,
        isToggleOn: state.isToggleOn
      };
    case UPDATE_DETAIL_STATE: 
      return {
        ...state,
        taskDetails: action.taskDetails,
      };
      case UPDATE_LOADING_STATE: 
      return {
        ...state,
        isLoading: true,
      };
      case UPDATE_LOADDED_STATE: 
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
};
