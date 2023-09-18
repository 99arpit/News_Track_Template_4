import { createSlice } from "@reduxjs/toolkit";

const AdSlice = createSlice({
    name: "AdSlice",
    initialState: {},
    reducers: {
      addAd(state, action) {
        state = action.payload;
        return state;
      },
    },
})

export {AdSlice};
export const { addAd } = AdSlice.actions;