import { deleteTodo, getAllTodos } from "../redux/actions";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Todo from "./Todo";
import Tabs from "./Tabs";
import { ACTIVE_TODO, ALLTODOS, DONE_TODO } from "../redux/actions/type";

const Todos = () => {
  const dispatch = useDispatch();

  const todos = useSelector((state) => state.todo);
  const currentTab = useSelector((state) => state.currentTab);

  useEffect(() => {
    dispatch(getAllTodos());
  }, []);

  // const getTodos = () => {
  //   if (currentTab === ALLTODOS) {
  //     return todos;
  //   } else if (currentTab === ACTIVE_TODO) {
  //     return todos.filter((todo) => !todo.done);
  //   } else if (currentTab === DONE_TODO) {
  //     return todos.filter((todo) => todo.done);
  //   }
  // };

  const removeDone = () => {
    todos.forEach(({ done, _id }) => {
      if (done) {
        dispatch(deleteTodo(_id));
      }
    });
  };
  
  return (
    <article>
      <div className="todos-bar">
        <Tabs currentTab={currentTab} />
        {todos.some((todo) => todo.done) ? (
          <button className="done-todo" onClick={removeDone}>
            Remove done todos
          </button>
        ) : null}
      </div>
      {/* <ul className="mam">
        {getTodos().map((todo) => {
          return <Todo key={todo._id} todo={todo} />;
        })}
      </ul> */}
      <ul className="mam">
        {todos
          .filter((todo) => {
            if (currentTab === ALLTODOS) return true;
            if (currentTab === ACTIVE_TODO) return !todo.done;
            if (currentTab === DONE_TODO) return todo.done;
          })
          .map((todo) => (
            <Todo key={todo._id} todo={todo} />
          ))}
      </ul>
    </article>
  );
};

export default Todos;
