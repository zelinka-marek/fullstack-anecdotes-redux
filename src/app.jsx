import { useSelector } from "react-redux";

export function App() {
  const anecdotes = useSelector((state) => state);

  const vote = (id) => {
    console.log("vote", id);
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
