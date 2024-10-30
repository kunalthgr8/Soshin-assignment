import { configureStore } from "@reduxjs/toolkit";
import sidebarSlice from "./sidebarSlice.js";

const store = configureStore({
  reducer: {
    sidebar: sidebarSlice,
  },
});

export default store;