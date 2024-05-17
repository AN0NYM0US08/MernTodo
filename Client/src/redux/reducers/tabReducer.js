import * as actiontypes from "../actions/type.js";

export const tabReducer = (state=actiontypes.ALLTODOS, action) =>{
    switch(action.type){
        case actiontypes.TOGGLE_TAB:
            return action.selected

     default: return state;
    }
}