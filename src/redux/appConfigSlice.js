import { createSlice } from "@reduxjs/toolkit";

const appConfigSlice = createSlice({
  name: "appConfig",
  initialState: {
    isToggleMenu: true,
  },
  reducers: {
    toggleMenuButton: (state) => {
      state.isToggleMenu = !state.isToggleMenu;
    },
  },
});

export const { toggleMenuButton } = appConfigSlice.actions;

export default appConfigSlice.reducer;
