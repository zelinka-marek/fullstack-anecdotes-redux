import { createSlice } from "@reduxjs/toolkit";
import { createAnecdote, getAnecdotes } from "../services/anecdotes";

function generateId() {
  return Number((Math.random() * 1_000_000).toFixed(0));
}

function toAnecdote(content) {
  return {
    id: generateId(),
    content,
    votes: 0,
  };
}

const anecdotesSlice = createSlice({
  name: "anecdotes",
  initialState: [],
  reducers: {
    appendAnecdote(state, action) {
      state.push(action.payload);
    },
    voteForAnecdote(state, action) {
      const { id } = action.payload;

      const anecdote = state.find((anecdote) => anecdote.id === id);
      anecdote.votes += 1;
    },
    setAnecdotes(_state, action) {
      return action.payload;
    },
  },
});

const { reducer } = anecdotesSlice;
export { reducer as anecdotesReducer };

export const { appendAnecdote, voteForAnecdote, setAnecdotes } =
  anecdotesSlice.actions;

export function initializeAnecdotes() {
  return async (dispatch) => {
    const anecdotes = await getAnecdotes();

    dispatch(setAnecdotes(anecdotes));
  };
}
