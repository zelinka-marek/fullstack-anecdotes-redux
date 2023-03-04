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

const INITIAL_STATE = anecdotesAtStart.map(toAnecdote);

export function anecdoteReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "ADD_VOTE": {
      const { id } = action.payload;

      const anecdote = state.find((anecdote) => anecdote.id === id);
      const updatedAnecdote = { ...anecdote, votes: anecdote.votes + 1 };

      return state.map((anecdote) =>
        anecdote.id === id ? updatedAnecdote : anecdote
      );
    }
    case "ADD_ANECDOTE": {
      const { content } = action.payload;

      const anecdote = toAnecdote(content);

      return state.concat(anecdote);
    }
    default: {
      return state;
    }
  }
}

export function addVote(id) {
  return { type: "ADD_VOTE", payload: { id } };
}

export function createAnecdote(content) {
  return { type: "ADD_ANECDOTE", payload: { content } };
}
