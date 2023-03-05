import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { combineReducers, createStore } from "redux";
import { App } from "./app";
import { anecdoteReducer } from "./reducers/anecdote";
import { filterReducer } from "./reducers/filter";
import "./styles/index.css";

const reducer = combineReducers({
  anecdotes: anecdoteReducer,
  filter: filterReducer,
});
const store = createStore(reducer);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
