import { configureStore } from "@reduxjs/toolkit";
import calculationReducer from "./calculator";

export default configureStore({
  reducer: {
    calculation: calculationReducer,
  },
});
