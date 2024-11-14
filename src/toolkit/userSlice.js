import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "usersDashboard",
  initialState: {
    userList: [],
    loggedUser: null,
  },
  reducers: {
    addLoggedUser: (state, action) => {
      state.loggedUser = action.payload;
    },
    addUserList: (state, action) => {
      state.userList = action.payload;
    },
  },
});

export const { addLoggedUser, addUserList } = userSlice.actions;
export default userSlice.reducer;
