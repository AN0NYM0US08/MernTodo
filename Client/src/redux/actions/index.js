import axios from "axios";
import { ADD_NEWTODO, TOGGLE_TODO, UPDATE_TODO,DELETE_TODO , TOGGLE_TAB} from "./type";
import { GETALL_TODO } from "./type";
const apiURL = "http://localhost:8000";

export const addnewTodo = (data) => async (dispatch) => {
  try {
    const res = await axios.post(`${apiURL}/todos`, { data });
    dispatch({ type: ADD_NEWTODO, payload: res.data });
  } catch (err) {
    console.log("Error posting", err.message);
  }
};

export const getAllTodos = () => async (dispatch) => {
  try {
    const res = await axios.get(`${apiURL}/todos`);
    console.log(res)
    dispatch({ type: GETALL_TODO, payload: res.data });
  } catch (err) {
    console.log("Error getting all tidos", err.message);
  }
};

export const toggleGet = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`${apiURL}/todos/${id}`);
    dispatch({ type: TOGGLE_TODO, payload: res.data });
  } catch (err) {
    console.log("Error getting all tidos", err.message);
  }
};


export const updateTodo = (id,data) => async (dispatch) => {
  try {
    // console.log("in update todo", id, data)
    const res = await axios.put(`${apiURL}/todos/${id}`, {data});
    console.log(res)
    dispatch({ type: UPDATE_TODO, payload: res.data });
  } catch (err) {
    console.log("Error putting", err.message);
  }
};

export const deleteTodo = (id) => async (dispatch) => {
  try {
    // console.log("in update todo", id, data)
    const res = await axios.delete(`${apiURL}/todos/${id}`);
    console.log(res)
    dispatch({ type: DELETE_TODO, payload: res.data });
  } catch (err) {
    console.log("Error deleting", err.message);
  }
};


export const toggleTab = (tab) => async (dispatch) => {
  dispatch({ type: TOGGLE_TAB ,selected: tab});
}