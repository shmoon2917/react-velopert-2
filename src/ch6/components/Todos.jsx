import React, { useState, memo } from "react";

const TodoItem = memo(({ todo, onToggle }) => {
  const onClick = (id) => () => onToggle(id);

  return (
    <li
      onClick={onClick(todo.id)}
      style={{
        textDecoration: todo.done ? "line-through" : "none",
      }}
    >
      {todo.text}
    </li>
  );
});

const TodoList = memo(({ todos, onToggle }) => {
  return (
    <ul>
      {todos &&
        todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} onToggle={onToggle} />
        ))}
    </ul>
  );
});

const Todos = memo(({ todos, onCreate, onToggle }) => {
  const [value, setValue] = useState("");

  const onChange = (e) => setValue(e.target.value);
  const onSubmit = (e) => {
    e.preventDefault();
    onCreate(value);
    setValue("");
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={value}
          placeholder="할 일을 입력하세요"
        />
      </form>
      <TodoList todos={todos} onToggle={onToggle} />
    </div>
  );
});

export default Todos;
