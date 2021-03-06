import React, { useState, useEffect, useRef } from "react";

function ToDoForm(props) {
  const [input, setInput] = useState("");

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
    });
    setInput("");
  };

  return (
    <div className="todoform">
      <form onSubmit={handleSubmit} className="todoform__form">
        <input
          type="text"
          placeholder="Type..."
          value={input}
          name="text"
          className="todoform__input"
          onChange={handleChange}
          ref={inputRef}
        />
        <button className="todoform__btn">ADD</button>
      </form>
    </div>
  );
}

export default ToDoForm;
