import React from 'react';
import { TodoItem } from './TodoItem';

export const TodoList = ({ todos }) => {
  return (
    <div className="bg-slate-50 my-4 rounded p-4 max-w-lg">
      {todos.length ? (
        <ul>
          {todos.map(({ id, text }) => (
            <TodoItem key={id} text={text} id={id} />
          ))}
        </ul>
      ) : (
        <h4>You don`t have any todos. Add it to your list!</h4>
      )}
    </div>
  );
};
