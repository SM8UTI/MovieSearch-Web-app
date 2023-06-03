import { createSlice } from "@reduxjs/toolkit";

const inputSlice = createSlice({
  name: "input",
  initialState: {
    keyword: "",
  },
  reducers: {
    inputUpdate: (state, action) => {
      state.keyword = action.payload;
    },
  },
});

export const { inputUpdate } = inputSlice.actions;
export default inputSlice.reducer;
