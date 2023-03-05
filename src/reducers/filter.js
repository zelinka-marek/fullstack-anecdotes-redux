import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filter",
  initialState: "",
  reducers: {
    setFilter(_state, action) {
      const { filter } = action.payload;

      return filter;
    },
  },
});

const { reducer } = filterSlice;
export { reducer as filterReducer };

export const { setFilter } = filterSlice.actions;
