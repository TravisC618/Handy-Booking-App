import { createContext } from "react";

export const UPDATE_isTabOneOn_State = "UPDATE_isTabOneOn_State";
export const UPDATE_isTabTwoOn_State = "UPDATE_isTabTwoOn_State";
export const UPDATE_isTabThreeOn_State = "UPDATE_isTabThreeOn_State";
export const UPDATE_isTabFourOn_State = "UPDATE_isTabFourOn_State";
export const UPDATE_isTabFiveOn_State = "UPDATE_isTabFiveOn_State";

export const HomeContext = createContext();

export const initialState = {
  isTabOneOn: true,
  isTabTwoOn: false,
  isTabThreeOn: false,
  isTabFourOn: false,
  isTabFiveOn: false,
};

export const homeReducer = (state, action) => {
  switch (action.type) {
    case UPDATE_isTabOneOn_State:
      return {
        ...state,
        isTabOneOn: true,
        isTabTwoOn: false,
        isTabThreeOn: false,
        isTabFourOn: false,
        isTabFiveOn: false,
      };
    case UPDATE_isTabTwoOn_State: 
      return {
        ...state,
        isTabOneOn: false,
        isTabTwoOn: true,
        isTabThreeOn: false,
        isTabFourOn: false,
        isTabFiveOn: false,
      };
      case UPDATE_isTabThreeOn_State: 
      return {
        ...state,
        isTabOneOn: false,
        isTabTwoOn: false,
        isTabThreeOn: true,
        isTabFourOn: false,
        isTabFiveOn: false,
      };
      case UPDATE_isTabFourOn_State: 
      return {
        ...state,
        isTabOneOn: false,
        isTabTwoOn: false,
        isTabThreeOn: false,
        isTabFourOn: true,
        isTabFiveOn: false,
      };
      case UPDATE_isTabFiveOn_State: 
      return {
        ...state,
        isTabOneOn: false,
        isTabTwoOn: false,
        isTabThreeOn: false,
        isTabFourOn: false,
        isTabFiveOn: true,
      };
    default:
      return state;
  }
};
