import React from 'react';
import styled from 'styled-components';
import TodoItem from './TodoItem';
import { useTodoState } from '../TodoContext';

const TodoListBlock = styled.div`
  flex: 1;
  padding: 20px 32px 48px 32px;
  overflow-y: auto;
`;

function TodoList() {
  const todos = useTodoState();

  return (
    <TodoListBlock>
      {todos.map((todo, id) => (
        <TodoItem
          key={todo.id}
          done={todo.done}
          text={todo.text}
          id={todo.id}
        />
      ))}
    </TodoListBlock>
  );
}

export default TodoList;
