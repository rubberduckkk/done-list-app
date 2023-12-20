import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: 'ui',
  initialState: { loading: true },
  reducers: {
    setLoading(state, action) {
      state.loading = action.payload.loading;
    }
  }
});

export const uiActions = uiSlice.actions;

export default uiSlice;