import React from "react";
import Header from "./components/Header";
import TodoForm from "./components/TodoForm";
import Todos from "./components/Todos";
const App = () => {
  return (
    <div className="con">
      <Header />
      <TodoForm />
      <Todos />
    </div>
  );
};

export default App;
