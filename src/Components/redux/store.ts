import { configureStore } from "@reduxjs/toolkit";
import boardReduce from "./boardSlide";
export default configureStore({
  reducer: { board: boardReduce },
});
