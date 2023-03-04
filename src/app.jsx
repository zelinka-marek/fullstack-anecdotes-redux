import { useDispatch, useSelector } from "react-redux";
import { voteFor } from "./reducers/anecdote";

export function App() {
  const dispatch = useDispatch();
  const anecdotes = useSelector((state) => state);

  const vote = (id) => {
    dispatch(voteFor(id));
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
      <form style={{ display: "flex", gap: 8 }}>
        <input type="text" name="anecdote" required aria-label="Anecdote" />
        <button type="submit">Save</button>
      </form>
    </div>
  );
}
