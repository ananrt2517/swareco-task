import { configureStore } from '@reduxjs/toolkit';
import taskReducer from './taskReducer';
import { Task } from '../types';

export type StoreType = {
  tasks: { value: Task[] } 
}

export const store = configureStore<StoreType>({
  reducer: {
    tasks: taskReducer,
  },
});

export default store;