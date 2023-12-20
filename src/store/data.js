import { createSlice } from "@reduxjs/toolkit";

const dataSlice = createSlice({
  name: 'data',
  initialState: { done: [] },
  reducers: {
    addDone(state, action) {
      state.done.push(action.payload);
    }
  }
});

export const dataActions = dataSlice.actions;

export default dataSlice;