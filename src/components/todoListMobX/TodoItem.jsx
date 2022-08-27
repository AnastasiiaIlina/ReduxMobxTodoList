import React from 'react';
import { todoStore } from '../../store/mobXStore';
import { observer } from 'mobx-react-lite';

export const TodoItem = observer(({ todo }) => {
  const { complete, remove } = todoStore;

  return (
    <li
      className={`flex justify-between items-center border border-sky-100 border-0 border-b p-3 ${
        todo.isCompleted && 'text-green-600 line-through'
      }`}
    >
      {todo.text}
      <div>
        <input
          type="checkbox"
          className="mx-3"
          onChange={() => complete(todo.id)}
          checked={todo.isCompleted}
        />
        <button
          className="bg-red-500 hover:bg-red-700 px-3 py-2 rounded-lg text-slate-100 leading-none"
          onClick={() => remove(todo.id)}
        >
          x
        </button>
      </div>
    </li>
  );
});
