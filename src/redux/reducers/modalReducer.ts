import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ModalState } from "../../types/taskTypes";

const initialState: ModalState = {
  isOpen: false,
  actionType: "complete",
  task: {
    id: "",
    title: "",
    description: "",
    status: "waiting",
  },
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (state, action: PayloadAction<ModalState>) => {
      state.isOpen = true;
      state.actionType = action.payload.actionType;
      state.task = action.payload.task;
    },
    closeModal: (state) => {
      state.isOpen = false;
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;

export default modalSlice.reducer;
