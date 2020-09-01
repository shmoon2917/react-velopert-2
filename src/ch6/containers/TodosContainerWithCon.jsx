import React from "react";
import { connect } from "react-redux";
import Todos from "../components/Todos";
import { addTodo, toggleTodo } from "../modules/todos";

const TodosContainer = ({ todos, addTodo, toggleTodo }) => {
  const onCreate = (text) => addTodo(text);
  const onToggle = (id) => toggleTodo(id);

  return <Todos todos={todos} onCreate={onCreate} onToggle={onToggle} />;
};

// connect 함수를 사용 할 때 인자 쪽에서
// 익명함수로 바로 만들어서 사용하면 코드가 꽤나 깔끔해집니다.
export default connect((state) => ({ todos: state.todos }), {
  addTodo,
  toggleTodo,
})(TodosContainer);
