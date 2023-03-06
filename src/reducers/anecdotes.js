import { createSlice } from "@reduxjs/toolkit";
import {
  createAnecdote,
  getAnecdotes,
  updateAnecdote,
} from "../services/anecdotes";

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
    setAnecdote(state, action) {
      const { id, updatedAnecdote } = action.payload;

      return state.map((anecdote) =>
        anecdote.id === id ? updatedAnecdote : anecdote
      );
    },
    setAnecdotes(_state, action) {
      return action.payload;
    },
  },
});

const { reducer } = anecdotesSlice;
export { reducer as anecdotesReducer };

export const { appendAnecdote, setAnecdote, setAnecdotes } =
  anecdotesSlice.actions;

export function initializeAnecdotes() {
  return async (dispatch) => {
    const anecdotes = await getAnecdotes();

    dispatch(setAnecdotes(anecdotes));
  };
}

export function addAnecdote(content) {
  return async (dispatch) => {
    const anecdote = await createAnecdote({ content, votes: 0 });

    dispatch(appendAnecdote(anecdote));
  };
}

export function voteForAnecdote(id) {
  return async (dispatch, getState) => {
    const { anecdotes } = getState();

    const anecdote = anecdotes.find((anecdote) => anecdote.id === id);
    const anecdoteUpdates = { ...anecdote, votes: anecdote.votes + 1 };

    const updatedAnecdote = await updateAnecdote(id, anecdoteUpdates);

    dispatch(setAnecdote({ id, updatedAnecdote }));
  };
}
