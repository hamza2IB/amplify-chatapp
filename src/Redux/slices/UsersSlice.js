import { createSlice } from "@reduxjs/toolkit";

const users = [];

const userSlice = createSlice({
  name: "users",
  initialState: users,
  reducers: {
    getAllUsers: (state, action) => {
      return action.payload;
    },
  },
});

export const { getAllUsers } = userSlice.actions;
export default userSlice.reducer;
