import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AnecdoteForm } from "./components/anecdote-form";
import { AnecdoteList } from "./components/anecdote-list";
import { Filter } from "./components/filter";
import { Notification } from "./components/notification";
import { addAnecdote, initializeAnecdotes } from "./reducers/anecdotes";
import { setFilter } from "./reducers/filter";

export function App() {
  const dispatch = useDispatch();

  const notification = useSelector(({ notification }) => notification);

  useEffect(() => {
    dispatch(initializeAnecdotes());
  }, [dispatch]);

  const anecdotes = useSelector(({ anecdotes, filter }) => {
    const sortedAnecdotes = [...anecdotes].sort((a, b) => b.votes - a.votes);
    if (!filter) {
      return sortedAnecdotes;
    }

    return sortedAnecdotes.filter((a) =>
      new RegExp(filter, "i").test(a.content)
    );
  });

  return (
    <div>
      <h1>Anecdotes</h1>
      {notification && <Notification message={notification} />}
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        <Filter onChange={(filter) => dispatch(setFilter({ filter }))} />
        <AnecdoteList anecdotes={anecdotes} />
      </div>
      <h2>New Anecdote</h2>
      <AnecdoteForm onSubmit={(content) => dispatch(addAnecdote(content))} />
    </div>
  );
}
