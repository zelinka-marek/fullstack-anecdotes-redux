import { useDispatch } from "react-redux";
import { voteForAnecdote } from "../reducers/anecdotes";

export function AnecdoteList(props) {
  const { anecdotes } = props;

  const dispatch = useDispatch();

  return (
    <div>
      {anecdotes.map((anecdote) => (
        <div key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div>
            has {anecdote.votes}{" "}
            <button
              type="button"
              onClick={() => dispatch(voteForAnecdote({ id: anecdote.id }))}
            >
              vote
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
