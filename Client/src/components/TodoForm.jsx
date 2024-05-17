import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {addnewTodo} from "../redux/actions";
import Tabs from "./Tabs";

const TodoForm = () => {
  const [text, setText] = useState("");

  const dispatch = useDispatch();
  const onFormSubmit = (e) => {
    e.preventDefault();
    dispatch(addnewTodo(text));
    setText("");
  };

  const onInputChange = (e) => {
    setText(e.target.value);
  };

  return (
    <form action="" className="todoform" onSubmit={onFormSubmit}>
      <input
        type="text"
        placeholder=" Enter todo..."
        onChange={onInputChange}
        value={text}
      />
    </form>
  );
};

export default TodoForm;
