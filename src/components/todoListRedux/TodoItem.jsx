import { completeTodo, removeTodo } from './todoSlice';
import React from 'react';
import { useSelector } from 'react-redux';

export const TodoItem = ({ id, text }) => {
  const todos = useSelector((state) => state.todos);
  const currentTodo = todos.find((todo) => todo.id === id);

  return (
    <li
      className={`flex justify-between items-center border border-sky-100 border-0 border-b p-3 ${
        currentTodo.isCompleted && 'text-green-600 line-through'
      }`}
    >
      {text}
      <div>
        <input
          type="checkbox"
          className="mx-3"
          onChange={() => completeTodo(id)}
          checked={currentTodo.isCompleted}
        />
        <button
          className="bg-red-500 hover:bg-red-700 px-3 py-2 rounded-lg text-slate-100 leading-none"
          onClick={() => removeTodo(id)}
        >
          x
        </button>
      </div>
    </li>
  );
};
