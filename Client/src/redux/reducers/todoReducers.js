import * as actiontypes from "../actions/type.js";

const todoReducer = (state = [], action) => {
  switch (action.type) {
    case actiontypes.ADD_NEWTODO:
      return [action.payload, ...state];

    case actiontypes.GETALL_TODO:
      return action.payload;

    case actiontypes.TOGGLE_TODO:
      return state.map((todo) =>
        todo._id === action.payload._id ? { ...todo, done: !todo.done } : todo
      );
    case actiontypes.UPDATE_TODO:
      return state.map((todo) => {
        return todo._id === action.payload._id
          ? { ...todo, data: action.payload.data }
          : todo;
      });
    case actiontypes.DELETE_TODO:
      return state.filter((todo) => todo._id !== action.payload._id);
    default:
      return state;
  }
};

export default todoReducer;
