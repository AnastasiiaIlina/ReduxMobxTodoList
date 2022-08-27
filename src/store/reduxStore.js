import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../components/todoListRedux/todoSlice';

export default configureStore({ reducer: todoReducer });
