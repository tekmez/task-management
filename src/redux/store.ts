import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./reducers/taskReducer";
import modalReducer from "./reducers/modalReducer";

export const store = configureStore({
  reducer: {
    tasks: taskReducer,
    modal: modalReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
