import { useDispatch, useSelector } from "react-redux";
import { AnecdoteForm } from "./components/anecdote-form";
import { AnecdoteList } from "./components/anecdote-list";
import { Filter } from "./components/filter";
import { createAnecdote } from "./reducers/anecdote";
import { setFilter } from "./reducers/filter";

export function App() {
  const dispatch = useDispatch();
  const anecdotes = useSelector(({ anecdotes, filter }) => {
    const sortedAnecdotes = anecdotes.sort((a, b) => b.votes - a.votes);
    if (!filter) {
      return sortedAnecdotes;
    }

    return sortedAnecdotes.filter((a) =>
      a.content.toLowerCase().includes(filter.toLowerCase())
    );
  });

  return (
    <div>
      <h1>Anecdotes</h1>
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        <Filter onChange={(filter) => dispatch(setFilter(filter))} />
        <AnecdoteList anecdotes={anecdotes} />
      </div>
      <h2>New Anecdote</h2>
      <AnecdoteForm onSubmit={(content) => dispatch(createAnecdote(content))} />
    </div>
  );
}
