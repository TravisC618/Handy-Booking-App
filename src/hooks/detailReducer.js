import { createContext } from "react";

export const UPDATE_Map_State = "UPDATE_Card_State";
export const UPDATE_Detail_State = "UPDATE_Detail_State";

export const DetailContext = createContext();

export const initialState = {
    isToggleOn: false,
    isDetailOn: true,
    _id:"",
  };
  
export const detailReducer = (state, action) => {
    switch (action.type) {
        case UPDATE_Map_State:
            return {
              ...state,
              isToggleOn: state.isToggleOn,
            };
        default:
        return state;
    }
    };

    
