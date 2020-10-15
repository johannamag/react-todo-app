import React, { useState } from "react";
import ToDoForm from "./ToDoForm";

function ToDoList() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }
    const newTodos = [todo, ...todos];

    setTodos(newTodos);
  };

  return (
    <div className="todolist">
      <h1>What do you want to do today?</h1>
      <ToDoForm onSubmit={addTodo} />
    </div>
  );
}

export default ToDoList;
