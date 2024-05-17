import { MdDelete } from "react-icons/md";
import { FaPen } from "react-icons/fa";
import { deleteTodo, toggleGet } from "../redux/actions";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { updateTodo } from "../redux/actions";

const Todo = ({ todo }) => {
  const [edit, setedited] = useState(false);
  const [text, setText] = useState(todo.data);

 
  const dispatch = useDispatch();

  const onformsubmit = (e) => {
    e.preventDefault();
    setedited((prevstate) => !prevstate);
    dispatch(updateTodo(todo._id, text));
  };

  

  return (
    <li className="todo-item" onClick={() => dispatch(toggleGet(todo._id))}>
      <span className="todo-text" style={{ display: edit ? "none" : "",textDecoration: todo.done ? 'line-through' : '',textTransform: 'capitalize'  }}>
        {todo.data}
      </span>
      <form onSubmit={onformsubmit} style={{ display: edit ? "" : "none"}}>
        <input
          type="text"
          className="innertodo"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </form>
      <span
        className="todo-action"
        onClick={() => dispatch(deleteTodo(todo._id))}
      >
        <MdDelete />
      </span>
      <span
        className="todo-action-wrt"
        onClick={() => setedited((prevstate) => !prevstate)}
      >
        <FaPen />
      </span>
    </li>
  );
};

export default Todo;

