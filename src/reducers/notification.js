import { createSlice } from "@reduxjs/toolkit";

const notificationSlice = createSlice({
  name: "notification",
  initialState: null,
  reducers: {
    setNotification(_state, action) {
      const { message } = action.payload;

      return message;
    },
    removeNotification(_state, _action) {
      return null;
    },
  },
});

export const { reducer: notificationReducer } = notificationSlice;
export const { setNotification, removeNotification } =
  notificationSlice.actions;
