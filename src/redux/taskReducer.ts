import { createSlice } from "@reduxjs/toolkit";
import { Task } from "../types";

type TaskState = {
  value: Task[];
};

const initialState: TaskState = {
  value: [],
};

const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    initializeTasks: (state: typeof initialState, action) => {
      state.value = action.payload;
    },
    createTask: (state: typeof initialState, action) => {
      state.value = [action.payload, ...state.value];
    },
    completeTask: (state: typeof initialState, action) => {
      const mappedValue = state.value.map((item) => {
        if (item.id === action.payload) {
          return { ...item, completed: true };
        }

        return item;
      });
      state.value = mappedValue;
    },
    deleteTask: (state: typeof initialState, action) => {
      const filteredValue = state.value.filter(
        (item) => item.id !== action.payload
      );
      state.value = filteredValue;
    },
  },
});

export const { initializeTasks, createTask, completeTask, deleteTask } =
  taskSlice.actions;

export default taskSlice.reducer;
