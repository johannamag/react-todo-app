import React, { useState } from "react";
import ToDoForm from "./ToDoForm";
import { CgCloseR } from "react-icons/cg";
import { FiEdit } from "react-icons/fi";

function ToDo({ todos, completeTodo, removeTodo, updateTodo }) {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });

  const submitUpdate = (value) => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: "",
    });
  };

  if (edit.id) {
    return <ToDoForm edit={edit} onSubmit={submitUpdate} />;
  }

  return todos.map((todo, index) => (
    <div
      key={index}
      className={todo.isComplete ? "todo-row complete" : "todo-row"}
    >
      <div key={todo.id} onClick={() => completeTodo(todo.id)}>
        {todo.text}
      </div>
      <div className="icons">
        <CgCloseR onClick={() => removeTodo(todo.id)} className="delete-icon" />
        <FiEdit
          onClick={() => setEdit({ id: todo.id, value: todo.text })}
          className="edit-icon"
        />
      </div>
    </div>
  ));
}

export default ToDo;
