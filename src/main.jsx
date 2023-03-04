import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { App } from "./app";
import { anecdoteReducer } from "./reducers/anecdote";
import "./styles/index.css";

const store = createStore(anecdoteReducer);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
