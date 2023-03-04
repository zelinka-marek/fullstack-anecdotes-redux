import { useDispatch, useSelector } from "react-redux";
import { AnecdoteForm } from "./components/anecdote-form";
import { AnecdoteList } from "./components/anecdote-list";
import { createAnecdote } from "./reducers/anecdote";

export function App() {
  const dispatch = useDispatch();
  const anecdotes = useSelector((state) => {
    const byVotes = (a, b) => b.votes - a.votes;

    return state.sort(byVotes);
  });

  const addAnecdote = (content) => {
    dispatch(createAnecdote(content));
  };

  return (
    <div>
      <h1>Anecdotes</h1>
      <AnecdoteList anecdotes={anecdotes} />
      <h2>New Anecdote</h2>
      <AnecdoteForm onSubmit={addAnecdote} />
    </div>
  );
}
