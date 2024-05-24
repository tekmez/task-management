import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { OverviewModalState } from "../../types/taskTypes";

const initialState: OverviewModalState = {
  isOpen: false,
  task: {
    id: "",
    title: "",
    description: "",
    status: "waiting",
  },
};

const overviewModalSlice = createSlice({
  name: "overviewModal",
  initialState,
  reducers: {
    openOverViewModal: (state, action: PayloadAction<OverviewModalState>) => {
      state.isOpen = true;
      state.task = action.payload.task;
    },
    closeOverViewModal: (state) => {
      state.isOpen = false;
    },
  },
});

export const { openOverViewModal, closeOverViewModal } =
  overviewModalSlice.actions;

export default overviewModalSlice.reducer;
