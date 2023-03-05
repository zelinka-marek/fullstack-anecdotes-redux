import { createSlice } from "@reduxjs/toolkit";

const anecdotesAtStart = [
  "If it hurts, do it more often",
  "Adding manpower to a late software project makes it later!",
  "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  "Premature optimization is the root of all evil.",
  "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
];

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

const initialState = anecdotesAtStart.map(toAnecdote);

const anecdotesSlice = createSlice({
  name: "anecdotes",
  initialState,
  reducers: {
    addAnecdote(state, action) {
      const { content } = action.payload;

      state.push(toAnecdote(content));
    },
    voteForAnecdote(state, action) {
      const { id } = action.payload;

      const anecdote = state.find((anecdote) => anecdote.id === id);
      anecdote.votes += 1;
    },
  },
});

const { reducer } = anecdotesSlice;
export { reducer as anecdotesReducer };

export const { addAnecdote, voteForAnecdote } = anecdotesSlice.actions;
