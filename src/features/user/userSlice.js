import { createSlice } from "@reduxjs/toolkit";

let data = JSON.parse(sessionStorage.getItem("user"));
const initialState = {
  user: data ? data : null,
  isAuthenticated: data ? true : false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login(state, action) {
      if (action.payload) {
        state.user = action.payload;
        state.isAuthenticated = true;
        sessionStorage.setItem("user", JSON.stringify(action.payload));
      }
    },
    logout(state) {
      state.user = null;
      state.isAuthenticated = false;
      sessionStorage.removeItem("user");
    },
  },
});

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;
