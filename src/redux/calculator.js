import { createSlice } from "@reduxjs/toolkit";

export const calculationSlice = createSlice({
  name: "calculation",
  initialState: {
    calculation: "3+2+3",
    result: 0,
    history: [],
  },
  reducers: {
    calculate: (state, action) => {
      state.calculation += action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { calculate } = calculationSlice.actions;

export default calculationSlice.reducer;
