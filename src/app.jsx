import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AnecdoteForm } from "./components/anecdote-form";
import { AnecdoteList } from "./components/anecdote-list";
import { Filter } from "./components/filter";
import { Notification } from "./components/notification";
import { addAnecdote, setAnecdotes } from "./reducers/anecdotes";
import { setFilter } from "./reducers/filter";
import { removeNotification, setNotification } from "./reducers/notification";
import { createAnecdote, getAnecdotes } from "./services/anecdotes";

export function App() {
  const dispatch = useDispatch();

  const notification = useSelector(({ notification }) => notification);

  useEffect(() => {
    getAnecdotes().then((anecdotes) => {
      dispatch(setAnecdotes(anecdotes));
    });
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

  const newAnecdote = async (content) => {
    const anecdote = await createAnecdote({ content, votes: 0 });
    dispatch(addAnecdote(anecdote));

    dispatch(setNotification({ message: `added "${content}"` }));
    setTimeout(() => dispatch(removeNotification()), 3500);
  };

  return (
    <div>
      <h1>Anecdotes</h1>
      {notification && <Notification message={notification} />}
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        <Filter onChange={(filter) => dispatch(setFilter({ filter }))} />
        <AnecdoteList anecdotes={anecdotes} />
      </div>
      <h2>New Anecdote</h2>
      <AnecdoteForm onSubmit={newAnecdote} />
    </div>
  );
}
