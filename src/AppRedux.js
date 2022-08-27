import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import { getTodos, addTodo } from './components/todoListRedux/todoSlice';
import { TodoList } from './components/todoListRedux/TodoList';

function AppRedux() {
  const todos = useSelector(getTodos);
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
          addTodo({ id: Date.now(), text: inputValue, isCompleted: false })
        }
        className="bg-sky-500 hover:bg-sky-700 p-2 rounded-lg text-slate-100"
      >
        Add todo
      </button>

      <TodoList todos={todos} />
    </div>
  );
}

export default AppRedux;
