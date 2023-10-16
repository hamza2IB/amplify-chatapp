import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/UsersSlice";

const store = configureStore({
  reducer: {
    users: userSlice,
  },
});

export default store;
