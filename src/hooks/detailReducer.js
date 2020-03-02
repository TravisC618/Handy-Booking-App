import { createContext } from "react";

export const UPDATE_Map_State = "UPDATE_Card_State";
export const UPDATE_DETAIL_STATE = "UPDATE_DETAIL_STATE";

export const DetailContext = createContext();

export const initialState = {
  isToggleOn: false,
  isDetailOn: true,
  _id: "",
  taskDetails: {}
};

export const detailReducer = (state, action) => {
  switch (action.type) {
    case UPDATE_Map_State:
      return {
        ...state,
        isToggleOn: state.isToggleOn
      };
    case UPDATE_DETAIL_STATE: {
      return {
        ...state,
        taskDetails: state.taskDetails
      };
    }
    default:
      return state;
  }
};
