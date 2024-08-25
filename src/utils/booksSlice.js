import { createSlice } from "@reduxjs/toolkit";
import data from "../utils/mockdata";

const booksSlice = createSlice({
  name: "books",
  initialState: data,
  reducers: {
    addBook: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { addBook } = booksSlice.actions;
export default booksSlice.reducer;
