import { createSlice } from "@reduxjs/toolkit";

const notificationSlice = createSlice({
  name: "notification",
  initialState: null,
  reducers: {
    setNotification(_state, action) {
      return action.payload;
    },
    clearNotification(_state, _action) {
      return null;
    },
  },
});

export const { reducer: notificationReducer } = notificationSlice;
export const { setNotification, clearNotification } = notificationSlice.actions;

let timeoutId = null;

export function notify(message, timeout = 3500) {
  return (dispatch) => {
    if (timeoutId) {
      dispatch(clearNotification());

      clearTimeout(timeoutId);
    }

    dispatch(setNotification(message));

    timeoutId = setTimeout(() => {
      dispatch(clearNotification());
    }, timeout);
  };
}
