import React from 'react';
import './style.css';
import { Todo } from '../model';
import SingleTodo from './SingleTodo';

interface Props {
  todos: Array<Todo>;
  setTodos: React.Dispatch<React.SetStateAction<Array<Todo>>>;
}

const TodoList = ({ todos, setTodos }: Props) => {
  return (
    <div className="todos">
      {todos.map((t, index) => (
        <SingleTodo key={t.id} todo={t} todos={todos} setTodos={setTodos} />
      ))}
    </div>
  );
};

export default TodoList;
