import { configureStore } from "@reduxjs/toolkit";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { App } from "./app";
import { anecdotesReducer } from "./reducers/anecdotes";
import { filterReducer } from "./reducers/filter";
import { notificationReducer } from "./reducers/notification";
import "./styles/index.css";

const store = configureStore({
  reducer: {
    notification: notificationReducer,
    anecdotes: anecdotesReducer,
    filter: filterReducer,
  },
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
