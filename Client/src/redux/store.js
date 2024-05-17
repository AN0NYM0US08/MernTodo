import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { thunk } from 'redux-thunk';
import todoReducer from "./reducers/todoReducers";
import { tabReducer } from "./reducers/tabReducer";
// import { getAllTodos } from "./actions";
// import { toggleDone } from "./actions";

const reducers = combineReducers({
  todo: todoReducer,
  currentTab: tabReducer
});

const middleware = [thunk];

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
