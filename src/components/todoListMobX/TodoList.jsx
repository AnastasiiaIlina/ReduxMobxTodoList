import React from 'react';
import { TodoItem } from './TodoItem';
import { observer } from 'mobx-react-lite';

export const TodoList = observer(({ store }) => {
  const { todos } = store;

  return (
    <div className="bg-slate-50 my-4 rounded p-4 max-w-lg">
      {todos.length ? (
        <ul>
          {todos.map((todo) => {
            return <TodoItem key={todo.id} todo={todo} />;
          })}
        </ul>
      ) : (
        <h4>You don`t have any todos. Add it to your list!</h4>
      )}
    </div>
  );
});
