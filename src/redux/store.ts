import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./reducers/taskReducer";
import modalReducer from "./reducers/actionModalReducer";
import overViewModalReducer from "./reducers/overViewModalReducer";

export const store = configureStore({
  reducer: {
    tasks: taskReducer,
    modal: modalReducer,
    overViewModal: overViewModalReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
