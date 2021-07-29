import { createSlice } from "@reduxjs/toolkit";
import { default as calculateUtil } from "../utils/calculate";
export const calculationSlice = createSlice({
  name: "calculation",
  initialState: {
    calculation: "",
    result: 0,
    history: [],
    clearScreen: false,
  },
  reducers: {
    calculate: (state, action) => {
      const calculation = action.payload;
      const result = calculateUtil(calculation);
      return {
        ...state,
        calculation,
        result,
        clearScreen: false,
      };
    },
    total: (state, action) => {
      const calculation = action.payload;
      const result = calculateUtil(calculation);
      return {
        ...state,
        calculation,
        result,
        history: [...state.history, { calculation, result }],
        clearScreen: true,
      };
    },
    clear: (state) => {
      return {
        ...state,
        calculation: "",
        result: 0,
        clearScreen: false,
      };
    },
  },
});

// Action creators are generated for each case reducer function
export const { calculate, clear, total } = calculationSlice.actions;

export default calculationSlice.reducer;
