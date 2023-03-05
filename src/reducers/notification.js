import { createSlice } from "@reduxjs/toolkit";

const notificationSlice = createSlice({
  name: "notification",
  initialState: "hellloo",
  reducers: {
    setNotification(_state, action) {
      const { message } = action.payload;

      return message;
    },
  },
});

export const { reducer: notificationReducer } = notificationSlice;
export const { setNotification } = notificationSlice.actions;
