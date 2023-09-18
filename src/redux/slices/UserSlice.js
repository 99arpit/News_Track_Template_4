import { createSlice } from "@reduxjs/toolkit";

const UserSlice = createSlice({
  name: "userSlice",
  initialState: {},
  reducers: {
    addUser(state, action) {
      state = action.payload;
      return state;
    },
  },
});

export { UserSlice };
export const { addUser } = UserSlice.actions;
