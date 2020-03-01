import { createContext } from "react";

export const UPDATE_Map_State = "UPDATE_Card_State";
export const UPDATE_Detail_State = "UPDATE_Detail_State";

export const DetailContext = createContext();

export const initialState = {
    isToggleOn: false,
    isDetailOn: true,
  };
  
export const detailReducer = (state, action) => {
    switch (action.type) {
        case UPDATE_Map_State:
            return {
              ...state,
              isToggleOn: state.isToggleOn,
            };
            case UPDATE_Detail_State:
                return {
                  ...state,
                  isDetailOn: state.isDetailOn,
                };
        default:
        return state;
    }
    };

    
