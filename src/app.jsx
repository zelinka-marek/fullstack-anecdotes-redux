import { useDispatch, useSelector } from "react-redux";
import { AnecdoteForm } from "./components/anecdote-form";
import { addVote, createAnecdote } from "./reducers/anecdote";

export function App() {
  const dispatch = useDispatch();
  const anecdotes = useSelector((state) => {
    const byVotes = (a, b) => b.votes - a.votes;

    return state.sort(byVotes);
  });

  const vote = (id) => {
    dispatch(addVote(id));
  };

  const addAnecdote = (content) => {
    dispatch(createAnecdote(content));
  };

  return (
    <div>
      <h1>Anecdotes</h1>
      {anecdotes.map((anecdote) => (
        <div key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div>
            has {anecdote.votes}{" "}
            <button type="button" onClick={() => vote(anecdote.id)}>
              vote
            </button>
          </div>
        </div>
      ))}
      <h2>New Anecdote</h2>
      <AnecdoteForm onSubmit={addAnecdote} />
    </div>
  );
}
