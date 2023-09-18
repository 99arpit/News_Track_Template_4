import { UserSlice } from "./slices/UserSlice";
import { AdSlice } from "./slices/AdSlice";
import { configureStore } from "@reduxjs/toolkit";

const Store = configureStore({
  reducer: {
    User: UserSlice.reducer,
    Ad: AdSlice.reducer
  },
});

export default Store;
