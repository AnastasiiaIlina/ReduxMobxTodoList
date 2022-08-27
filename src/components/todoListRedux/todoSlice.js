import { createSlice } from '@reduxjs/toolkit';
import store from '../../store/reduxStore';

const initialState = {
  todos: [],
};

export const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    add: (state, action) => {
      state.todos.push(action.payload);
    },
    remove: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    complete: (state, action) => {
      const currentTodo = state.todos.find(
        (todo) => todo.id === action.payload
      );
      currentTodo.isCompleted = !currentTodo.isCompleted;
    },
  },
});

const { add, remove, complete } = todosSlice.actions;

export const getTodos = (state) => state.todos;
export const addTodo = (todo) => store.dispatch(add(todo));
export const removeTodo = (todoId) => store.dispatch(remove(todoId));
export const completeTodo = (todoId) => store.dispatch(complete(todoId));

export default todosSlice.reducer;
