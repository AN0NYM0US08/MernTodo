import express from "express";
import { addtodo, deleteTodo, getAllTodos,toggledone, updateTodo } from "../controllers/con.js";

const route = express.Router();

route.post("/todos", addtodo);
route.get("/todos",getAllTodos);
route.get("/todos/:id",toggledone);
route.put("/todos/:id",updateTodo);
route.delete("/todos/:id",deleteTodo);


export default route;
