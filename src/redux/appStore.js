import { configureStore } from "@reduxjs/toolkit";
import toggleMenuReducer from "./appConfigSlice";

const appStore = configureStore({
  reducer: {
    toggleMenu: toggleMenuReducer,
  },
});

export default appStore;
