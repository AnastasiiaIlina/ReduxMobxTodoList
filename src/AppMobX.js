import React, { useState } from 'react';

import { TodoList } from './components/todoListMobX/TodoList';
import { todoStore } from './store/mobXStore';

function AppMobX() {
  const [inputValue, setInputValue] = useState('');

  return (
    <div className="container mx-auto m-6 font-sans">
      <h1 className="text-3xl font-bold mb-6">Todo List</h1>
      <input
        type="text"
        name="todo"
        id="todo"
        className="border focus:ring-indigo-500 focus:border-indigo-500 mr-3 p-3 sm:text-sm border-gray-300 rounded-md"
        placeholder="Add todo item"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button
        onClick={() =>
          todoStore.add({
            id: Date.now(),
            text: inputValue,
            isCompleted: false,
          })
        }
        className="bg-sky-500 hover:bg-sky-700 p-2 rounded-lg text-slate-100"
      >
        Add todo
      </button>

      <TodoList store={todoStore} />
    </div>
  );
}

export default AppMobX;
